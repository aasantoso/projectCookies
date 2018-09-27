const express = require('express')
const app = express()
const bodyParser = require('body-parser')

//routes
const indexRoute = require('./routes/index.js')
const cookieRoute = require('./routes/cookie.js')
const customerRoute = require('./routes/customer.js')
const orderRoute = require('./routes/order.js')

//session
const session = require('express-session')
app.use(session({
    secret: 'aasantoso'
}))

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use('/', indexRoute)
app.use('/cookie', cookieRoute)
app.use('/customer', customerRoute)
app.use('/order', orderRoute)

app.use('/public', express.static('public'))

app.listen(3000)