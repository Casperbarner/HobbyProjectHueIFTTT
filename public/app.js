let username = 'QMACo62a2EOg7Y9k0cdjrofgVwPsqHOMtXmFWWMc'

turnOn = function() {
  let url = `http://192.168.0.100/api/${username}/lights/3/state`;
   let options = {
     method: 'put',
     headers: {
       "content-type": 'application/json',
     },
     body: JSON.stringify({
       on: true,
   })

   }
   fetch(url, options)
     .then(response => response.json())
     .then(response => {
       if (response.status == 'OK') {
      console.log("Succesfully turned on light")
      }
      if (response.status == 'NOTOK') {
        console.log("Failed to turn on light")
      }
     })
 };


turnOff = function() {
  let url = `http://192.168.0.100/api/${username}/lights/3/state`;
  let options = {
    method: 'put',
    headers: {
      "content-type": 'application/json',
    },
    body: JSON.stringify({
      on: false,
  })
}


  fetch(url, options)
    .then(response => response.json())
    .then(response => {
      if (response.status == 'OK') {
     console.log("Succesfully turned off light")
     }
     if (response.status == 'NOTOK') {
       console.log("Failed to turn off light")
     }
    })
};


changeGreen = function() {
  let url = `http://192.168.0.100/api/${username}/lights/3/state`;
  let options = {
    method: 'put',
    headers: {
      "content-type": 'application/json',
    },
    body: JSON.stringify({
      hue: 25500,
  })
}

  fetch(url, options)
    .then(response => response.json())
    .then(response => {
      if (response.status == 'OK') {
     console.log("Changed color")
     }
     if (response.status == 'NOTOK') {
       console.log("Did not change color")
     }
    })
};

changeRed = function() {
  let url = `http://192.168.0.100/api/${username}/lights/3/state`;
  let options = {
    method: 'put',
    headers: {
      "content-type": 'application/json',
    },
    body: JSON.stringify({
      hue: 0,
  })
}

  fetch(url, options)
    .then(response => response.json())
    .then(response => {
      if (response.status == 'OK') {
     console.log("Changed color")
     }
     if (response.status == 'NOTOK') {
       console.log("Did not change color")
     }
    })
};

changeBlue = function() {
  let url = `http://192.168.0.100/api/${username}/lights/3/state`;
  let options = {
    method: 'put',
    headers: {
      "content-type": 'application/json',
    },
    body: JSON.stringify({
      hue: 46920,
  })
}

  fetch(url, options)
    .then(response => response.json())
    .then(response => {
      if (response.status == 'OK') {
     console.log("Changed color")
     }
     if (response.status == 'NOTOK') {
       console.log("Did not change color")
     }
    })
};

getGreenStatus = function ()  {
  let url = `https://api.energidataservice.dk/datastore_search?resource_id=02356e88-7c4e-4ee9-b896-275d217cc1b9&limit=1&q=DK1`;
  let options = {
    method: 'GET',
    headers: {

    }
  }

  fetch(url, options)
    .then(response => response.json())
    .then(json => {
      console.log(json)
      let total = json.result.records[0].TotalLoad;
      let solar = json.result.records[0].SolarPower;
      let hydro = json.result.records[0].HydroPower;
      let other = json.result.records[0].OtherRenewable;
      let onShoreWind = json.result.records[0].OnshoreWindPower;
      let offShoreWind = json.result.records[0].OffshoreWindPower;
      let biomass = json.result.records[0].Biomass;
      let renewablePart = solar + hydro + other + onShoreWind + offShoreWind + biomass;
      let renewablePercentage = 100 / total * renewablePart;
      // let renewablePercentage = 80;
      console.log(renewablePercentage)

      if (renewablePercentage < 30) {
        changeBlue();
      } else if (renewablePercentage > 30.1 && renewablePercentage < 50)  {
        changeRed();
      } else {
        changeGreen();
      }

    })

}
var minutes = 60, the_interval = minutes * 60 * 1000;
setInterval(function() {
  console.log("I am doing my 1 minutes check");
  getGreenStatus();
}, the_interval);
