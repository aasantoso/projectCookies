const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000;

//routes
const indexRoute = require('./routes/index.js')
const cookieRoute = require('./routes/cookie.js')
const customerRoute = require('./routes/customer.js')
const orderRoute = require('./routes/order.js')


app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({
    extended: false
}))

//session
const session = require('express-session')
app.use(session({
    secret: 'aasantoso',
    resave: false,
    saveUninitialized: true
}))

app.use('/', indexRoute)
app.use('/cookie', cookieRoute)
app.use('/customer', customerRoute)
app.use('/order', orderRoute)

app.use('/public', express.static('public'))

app.listen(port)