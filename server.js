// Load Express and create app
const express = require('express')
const app = express()
const fetch = require('node-fetch')


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
    console.log('Database synchronized..')

    http.listen(3000, () => {
        console.log('Web server started..')
    })


// integrate with IFTTT
goodStatus = function () {
  let url = `https://maker.ifttt.com/trigger/good_status/with/key/l16PR43yAszVw5C9r-tGIoAZaESSgipQ54CV2jww0Sh`;
  let options = {
    method: 'GET',
    headers: {
    }
  }

  fetch(url, options)
    .then(response => response.json())
    .then(json => {
      if (response.status == 'OK') {
     console.log("OK")
     }
     if (response.status == 'NOTOK') {
       console.log("NOTOK")
     }

    })
    .catch(err => {
        console.log("Error catched GOODSTATUS")
      })
}
mediumStatus = function () {
  let url = `https://maker.ifttt.com/trigger/medium_status/with/key/l16PR43yAszVw5C9r-tGIoAZaESSgipQ54CV2jww0Sh`;
  let options = {
    method: 'GET',
    headers: {
    }
  }

  fetch(url, options)
    .then(response => response.json())
    .then(json => {
      if (response.status == 'OK') {
     console.log("OK")
     }
     if (response.status == 'NOTOK') {
       console.log("NOTOK")
     }

    })
    .catch(err => {
        console.log("Error catched MEDIUM STATUS")
      })
}

badStatus = function () {
  let url = `https://maker.ifttt.com/trigger/bad_status/with/key/l16PR43yAszVw5C9r-tGIoAZaESSgipQ54CV2jww0Sh`;
  let options = {
    method: 'GET',
    headers: {
    }
  }

  fetch(url, options)
    .then(response => response.json())
    .then(json => {
      if (response.status == 'OK') {
     console.log("OK")
     }
     if (response.status == 'NOTOK') {
       console.log("NOTOK")
     }

    })
    .catch(err => {
        console.log("Error catched BAD STATUS")
      })
}

getGreenStatus = function ()  {
  let url = `https://api.energidataservice.dk/datastore_search?resource_id=b5a8e0bc-44af-49d7-bb57-8f968f96932d&limit=1&q=DK1&sort=Minutes5DK desc`;
  let options = {
    method: 'GET',
    headers: {
    }
  }

  fetch(url, options)
    .then(response => response.json())
    .then(json => {
      let co2 = json.result.records[0].CO2Emission;
      console.log('The current co2 grams per kWh is ' + co2)


      if (co2 > 350) {
        badStatus();

      } else if (co2 > 150 && co2 < 349)  {
        mediumStatus();

      } else {
        goodStatus();

      }

    })
    .catch(err => {
        console.log("Error catched")
      })

}
getGreenStatus();
var minutes = 5, the_interval = minutes * 60 * 1000;
setInterval(function() {
  console.log("I am doing my 1 minutes check");
  getGreenStatus();
}, the_interval);
