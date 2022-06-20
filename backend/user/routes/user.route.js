const user = require('../controllers/user.controller')

module.exports = function(app){
  app.use(function (req, res, next) {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    )
    next()
  })

  app.post(
    '/api/user/acc/signUp',
    user.signUp
  )

  app.post(
    '/api/user/acc/signIn',
    user.signIn
  )

  app.get(
    '/api/user/getUsers',
    user.getUsers
  )

  app.get(
    '/api/user/getSpecific/:username',
    user.getSpecificUser
  )

  app.put(
    '/api/user/updateUsers/:username',
    user.updateUsers
  )
}