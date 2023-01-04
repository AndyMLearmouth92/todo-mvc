const express = require('express')
// Using Express
const app = express()
const connectDB = require('./config/database')
// Require is going to a different file to get something. Sometimes get a file, object or function. In this case config folder and then database file. DB file exports connectDB.
const homeRoutes = require('./routes/home')
const todoRoutes = require('./routes/todos')

require('dotenv').config({path: './config/.env'})
//If we do not have this string, any of the environment files will not run. env file allows us to hide our database information. We use gitignore to hide secrets we do not want on the internet. Mongo connection, cloud, heroku, google analytics.

connectDB()
// Calls the connectDB function

app.set('view engine', 'ejs')
// View engine - we are using ejs but could swap to something else e.g. react.
app.use(express.static('public'))
// CSS and client side JS.
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
//Body parser - we can parse things which come out of the body. Pull data out of the request when the form was submitted. items which need deleted.

app.use('/', homeRoutes)
app.use('/todos', todoRoutes)
//Routing - separating them. 
 
app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})    
// Deployment - when the application is hosted. Heroku will set their own port for their own server. If we hard code, Heroku will be unlikely to want to use that port. 