const mongoose = require('mongoose')

const connectDB = async () => {
  //Function which is called on the server.js
  try {
    const conn = await mongoose.connect(process.env.DB_STRING, {
      //Enviroment variable. We need to go to env file.
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

module.exports = connectDB
//Spits out the function above to use elsewhere.
