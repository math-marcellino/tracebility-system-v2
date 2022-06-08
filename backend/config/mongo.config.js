const mongoose = require('mongoose')
module.exports = () => {
  mongoose.connect(`mongodb+srv://William:immanuel245@cluster0.mfzcula.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, () => {
    console.log('connect to DB')
  })
}