const usersDB = require('../models/users.model')
const rolesDB = require('../models/roles.model')

const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

exports.signUp = async (req, res) => {
  const{
    username,
    nama_lengkap,
    role,
    password
  } = req.body

  try{    
    const fixPassword = await bcrypt.hash(password, 8)

    const findRole = await rolesDB.where({role: role})

    const addUsers = new usersDB({
      username,
      nama_lengkap,
      role: findRole[0],
      password: fixPassword
    })

    await addUsers.save()

    return res.status(200).send({
      message: "Berhasil Mendaftar",
    })
  } catch(err) {
    return res.status(500).send({message: err.message})
  }
}

exports.signIn = async (req, res) => {
  const{
    username,
    password
  } = req.body

  try{
    const account = await usersDB.where({username})

    if(account.length === 0){
      return res.status(401).send({message: "Username atau Password tidak tepat."})
    }

    const checkPassword = await bcrypt.compare(password, account[0].password)

    if(!checkPassword){
      return res.status(401).send({message: "Username atau Password tidak tepat"})
    }

    const token = jwt.sign({
      username: username,
      namaLengkap: account[0].nama_lengkap,
      role: account[0].role.role,
    }, process.env.JWT_KEY, {
      expiresIn: 21600
    })

    return res.status(200).send({
      result: "Successful Login",
      token: token,
    })

  } catch(err) {
    return res.status(500).send({
      message: err.message
    })
  }
}
