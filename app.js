const app = require('express')()
const bodyParser = require('body-parser')
const indexRoute = require('./routes/index.js')
const cookieRoute = require('./routes/cookie.js')
const customerRoute = require('./routes/customer.js')
const orderRoute = require('./routes/order.js')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use('/', indexRoute)
app.use('/cookies', cookieRoute)
app.use('/customers', customerRoute)
app.use('/orders', orderRoute)

app.listen(3000)