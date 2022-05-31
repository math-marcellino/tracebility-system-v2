const userDB = require('../models/user.model')
const roleDB = require('../models/role.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

exports.signUp = async (req, res) => {
  const{
    username,
    nama_lengkap,
    role,
    no_sertifHalal,
    password
  } = req.body

  try{
    const account = await userDB.query().where({username})

    if(account.length > 0)
      return res.status(403).send({message: "Sudah pernah mendaftar sebelumnya"})
    
    const fixPassword = await bcrypt.hash(password, 8)

    await userDB.query().insert({
      username,
      nama_lengkap,
      role,
      no_sertifHalal,
      password: fixPassword
    })

    return res.status(200).send({
      message: "Berhasil Mendaftar"
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
    const account = await userDB.query().where({username})

    if(account.length === 0){
      return res.status(401).send({message: "Username atau Password tidak tepat."})
    }

    const checkPassword = await bcrypt.compare(password, account[0].password)

    if(!checkPassword){
      return res.status(401).send({message: "Username atau Password tidak tepat"})
    }

    const role = await roleDB.query().where({id: account[0].role})

    const token = jwt.sign({
      username: username,
      role: role[0].role,
      noSertifHalal: account[0].no_sertifHalal
    }, process.env.JWT_KEY, {
      expiresIn: 21600
    })

    return res.status(200).send({
      result: "Successful Login",
      token: token,
      username: account[0].username,
      namaLengkap: account[0].nama_lengkap,
      role: role[0].role,
    })

  } catch(err) {
    return res.status(500).send({
      message: err.message
    })
  }
}
