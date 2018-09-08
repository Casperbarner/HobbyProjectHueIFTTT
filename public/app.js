let username = 'QMACo62a2EOg7Y9k0cdjrofgVwPsqHOMtXmFWWMc'

// turnOn = function() {
//   let url = `http://192.168.0.100/api/${username}/lights/3/state`;
//    let options = {
//      method: 'put',
//      headers: {
//        "content-type": 'application/json',
//      },
//      body: JSON.stringify({
//        on: true,
//    })
//
//    }
//    fetch(url, options)
//      .then(response => response.json())
//      .then(response => {
//        if (response.status == 'OK') {
//       console.log("Succesfully turned on light")
//       }
//       if (response.status == 'NOTOK') {
//         console.log("Failed to turn on light")
//       }
//      })
//  };
//
//
// turnOff = function() {
//   let url = `http://192.168.0.100/api/${username}/lights/3/state`;
//   let options = {
//     method: 'put',
//     headers: {
//       "content-type": 'application/json',
//     },
//     body: JSON.stringify({
//       on: false,
//   })
// }
//
//
//   fetch(url, options)
//     .then(response => response.json())
//     .then(response => {
//       if (response.status == 'OK') {
//      console.log("Succesfully turned off light")
//      }
//      if (response.status == 'NOTOK') {
//        console.log("Failed to turn off light")
//      }
//     })
// };
//
//
// changeGreen = function() {
//   let url = `http://192.168.0.100/api/${username}/lights/3/state`;
//   let options = {
//     method: 'put',
//     headers: {
//       "content-type": 'application/json',
//     },
//     body: JSON.stringify({
//       hue: 25500,
//   })
// }
//
//   fetch(url, options)
//     .then(response => response.json())
//     .then(response => {
//       if (response.status == 'OK') {
//      console.log("Changed color")
//      }
//      if (response.status == 'NOTOK') {
//        console.log("Did not change color")
//      }
//     })
// };
//
// changeRed = function() {
//   let url = `http://192.168.0.100/api/${username}/lights/3/state`;
//   let options = {
//     method: 'put',
//     headers: {
//       "content-type": 'application/json',
//     },
//     body: JSON.stringify({
//       hue: 0,
//   })
// }
//
//   fetch(url, options)
//     .then(response => response.json())
//     .then(response => {
//       if (response.status == 'OK') {
//      console.log("Changed color")
//      }
//      if (response.status == 'NOTOK') {
//        console.log("Did not change color")
//      }
//     })
// };
//
// changeBlue = function() {
//   let url = `http://192.168.0.100/api/${username}/lights/3/state`;
//   let options = {
//     method: 'put',
//     headers: {
//       "content-type": 'application/json',
//     },
//     body: JSON.stringify({
//       hue: 46920,
//   })
// }
//
//   fetch(url, options)
//     .then(response => response.json())
//     .then(response => {
//       if (response.status == 'OK') {
//      console.log("Changed color")
//      }
//      if (response.status == 'NOTOK') {
//        console.log("Did not change color")
//      }
//     })
// };


// getGreenStatus = function ()  {
//   let url = `https://api.energidataservice.dk/datastore_search?resource_id=b5a8e0bc-44af-49d7-bb57-8f968f96932d&limit=1&q=DK1&sort=Minutes5DK desc`;
//   let options = {
//     method: 'GET',
//     headers: {
//     }
//   }
//
//   fetch(url, options)
//     .then(response => response.json())
//     .then(json => {
//       console.log(json)
//       let co2 = json.result.records[0].CO2Emission;
//       console.log('The current co2 grams per kWh is ' + co2)
//
//
//       if (co2 > 350) {
//         badStatus();
//
//       } else if (co2 > 150 && co2 < 349)  {
//         mediumStatus();
//
//       } else {
//         goodStatus();
//
//       }
//
//     })
//
// }
  // goodStatus = function () {
  //   let url = `https://maker.ifttt.com/trigger/good_status/with/key/l16PR43yAszVw5C9r-tGIoAZaESSgipQ54CV2jww0Sh`;
  //   let options = {
  //     method: 'GET',
  //     headers: {
  //     }
  //   }
  //
  //   fetch(url, options)
  //     .then(response => response.json())
  //     .then(json => {
  //       if (response.status == 'OK') {
  //      console.log("OK")
  //      }
  //      if (response.status == 'NOTOK') {
  //        console.log("NOTOK")
  //      }
  //
  //     })
  // }

  // mediumStatus = function () {
  //   let url = `https://maker.ifttt.com/trigger/medium_status/with/key/l16PR43yAszVw5C9r-tGIoAZaESSgipQ54CV2jww0Sh`;
  //   let options = {
  //     method: 'GET',
  //     headers: {
  //     }
  //   }
  //
  //   fetch(url, options)
  //     .then(response => response.json())
  //     .then(json => {
  //       if (response.status == 'OK') {
  //      console.log("OK")
  //      }
  //      if (response.status == 'NOTOK') {
  //        console.log("NOTOK")
  //      }
  //
  //     })
  // }
  //
  // badStatus = function () {
  //   let url = `https://maker.ifttt.com/trigger/bad_status/with/key/l16PR43yAszVw5C9r-tGIoAZaESSgipQ54CV2jww0Sh`;
  //   let options = {
  //     method: 'GET',
  //     headers: {
  //     }
  //   }
  //
  //   fetch(url, options)
  //     .then(response => response.json())
  //     .then(json => {
  //       if (response.status == 'OK') {
  //      console.log("OK")
  //      }
  //      if (response.status == 'NOTOK') {
  //        console.log("NOTOK")
  //      }
  //
  //     })
  // }
