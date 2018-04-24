// Load Express and create app
const express = require('express')
const app = express()

// Load express-session and set it up
// Documentation: https://github.com/expressjs/session
const session = require('express-session')
app.use(session({
    secret: 'audl2018'
}))

// Enable JSON support
// Documentation: https://expressjs.com/en/api.html#express.json
app.use(express.json())

// Set up templates
// Documentation: https://expressjs.com/en/api.html#app.engine
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')

// Serve static files
// Documentation: https://expressjs.com/en/starter/static-files.html
app.use(express.static('public'))

// Load Socket.io and set it up
// Documentation: https://socket.io/get-started/chat/
const http = require('http').Server(app)
const io = require('socket.io')(http)

// Real time events
io.on('connection', socket => {
    console.log('Socket connected', socket.id)

    socket.emit('debug message', 'Socket connected to server!')
})

// Load database
const db = require('./database.js')

// Main endpoint where main page is served from
app.get('/', (req, res) => {
    // Render the main.html in the views folder
    res.render('main', { title: 'Main page title' })
})

// Return all messages
// app.get('/api/messages', (req, res) => {
//     db.Message.findAll().then(messages => {
//         res.json(messages)
//     })
// })

// About page
app.get('/about', (req, res) => {
    // Example socket.io event
    io.emit('page view', {
        page: 'about'
    })

    // Render the about.html in the views folder
    res.render('about', { title: 'About page' })
})

// Synchronize database models
// Documentation: http://docs.sequelizejs.com/
db.sequelize.sync({ force: false }).then(() => {
    console.log('Database synchronized..')

    http.listen(3000, () => {
        console.log('Web server started..')
    })
})