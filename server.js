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


// Synchronize database models
// Documentation: http://docs.sequelizejs.com/
    console.log('Database synchronized..')

    http.listen(3000, () => {
        console.log('Web server started..')
    })

// This function calls the energinet data service api to check amount of co2 grams per kWh in the power lines in Western Denmark.
// Dependent on the response, one of the three IFTTT functions are called, which eventually switches a given Hue light to green, yellow or red.
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
        console.log(err)
      })

}

// integrate with IFTTT

// Changes Hue lights to green
goodStatus = function () {
  let url = `https://maker.ifttt.com/trigger/renewable_status/with/key/l16PR43yAszVw5C9r-tGIoAZaESSgipQ54CV2jww0Sh`;
  let options = {
    method: 'POST',
    headers: {
          "content-type": 'application/json',
        },
        body: JSON.stringify({
          'value1' : 'green',
      })
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
        console.log(err)
      })
}

// Changes hue lights to yellow
mediumStatus = function () {
  let url = `https://maker.ifttt.com/trigger/renewable_status/with/key/l16PR43yAszVw5C9r-tGIoAZaESSgipQ54CV2jww0Sh`;
  let options = {
    method: 'POST',
    headers: {
          "content-type": 'application/json',
        },
        body: JSON.stringify({
          'value1': 'yellow',
      })
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
        console.log(err)
      })
}

// Changes hue lights to red
badStatus = function () {
  let url = `https://maker.ifttt.com/trigger/renewable_status/with/key/l16PR43yAszVw5C9r-tGIoAZaESSgipQ54CV2jww0Sh`;
  let options = {
    method: 'POST',
    headers: {
          "content-type": 'application/json',
        },
        body: JSON.stringify({
          'value1': 'red',
      })
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
        console.log(err)
      })
}

// Initiating the getGreenStatus function in launching the application
getGreenStatus();

// This code calls the getGreenStatus(); function every 5 minutes, resulting in updating the color of the lights. Continously runs 
// to keep the user up-to-date about green energy in the power lines
var minutes = 5, the_interval = minutes * 60 * 1000;
setInterval(function() {
  console.log("I am doing my 5 minutes check");
  getGreenStatus();
}, the_interval);
