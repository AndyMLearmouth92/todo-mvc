//Router knows which controller is in charge of handling the request. The controller will look at the view to render ejs and sit out HTML. It will then go back to respond to the client.

const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')
//Making a request, we know it has to be an object. An object will be placed where require is.

router.get('/', homeController.getIndex) 
// Listening for browser request and sends to the controller. It is a get request on the root route so use home controller and the get index method.

module.exports = router