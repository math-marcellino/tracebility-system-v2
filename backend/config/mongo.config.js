const mongoose = require('mongoose')
module.exports = () => {
  mongoose.connect(`mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, () => {
    console.log('connect to DB')
  })
}