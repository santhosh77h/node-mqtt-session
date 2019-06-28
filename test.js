var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://test.mosquitto.org',{
  clientId: 'mqttjs_345579'
})
 
client.on('connect', function () {
  setInterval(publichTimer,5000)
})


function publichTimer(){
  let msg = `timer ${(new Date()).getTime()}`
  console.log(msg)
  client.publish("timer",msg , {qos:2,retain:true})
}



// client.on('message', function (topic, message) {
//   // message is Buffer
//   console.log(message.toString() , topic)
// //   client.end()
// })


setTimeout( () => publichTimer() , 3000 )