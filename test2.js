var mqtt = require('mqtt')
var client  = mqtt.connect('mqtt://test.mosquitto.org',{
  clientId: 'mqttjs_345668',
  clean:false
})
client.on('connect', function (err) {
  console.log(err,"sasas")
  if(!err.sessionPresent)
    client.subscribe('timer', {qos:2}, function (err) {
      console.log("sasasas" , err)
      if (!err) {
        console.log("subscriber to  topic timer")
        // client.publish('presence', 'Hello mqtt')
      }
    })
})
 
client.on('message', function (topic, message) {
  // console.log(message)
  console.log(`Topic: ${topic} & Message: ${message.toString()}`)
})

client.on('reconnect',function(a,b){
  console.log(a,b)
})
