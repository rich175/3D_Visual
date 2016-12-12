//var client  = mqtt.connect({ host: 'localhost', port: 8000 });

var clientId = 'mqttjs_' + Math.random().toString(16).substr(2, 8)

var host = 'ws://localhost:8000/'

var options = {
    keepalive: 10,
    clientId: clientId,
    protocolId: 'MQTT',
    protocolVersion: 4,
    clean: true,
    reconnectPeriod: 1000,
    connectTimeout: 30 * 1000,
    will: {
        topic: 'WillMsg',
        payload: 'Connection Closed abnormally..!',
        qos: 0,
        retain: false
    },
    username: 'demo',
    password: 'demo',
    rejectUnauthorized: false
}

/*var client = mqtt.connect(host, options)

client.on('error', function(err) {
    console.log(err)
    client.end()
})

client.on('connect', function() {
    console.log('client connected:' + clientId)
})

client.subscribe('topic', {
    qos: 0
})
client.subscribe('testtopic', {
    qos: 0
})
client.subscribe('/s2s/station/demo/out', {
    qos: 0
})

client.publish('topic', 'wss secure connection demo...!', {
    qos: 0,
    retained: false
})

client.on('message', function(topic, message, pakcet) {
    console.log('Received Message:= ' + message.toString() + '\nOn topic:= ' + topic)
})

client.on('close', function() {
    console.log(clientId + ' disconnected')
})
*/

/*client.on('connect', function() {
    client.subscribe('presence')
    client.subscribe('testtopic');
    client.publish('presence', 'Hello mqtt')
})

client.on('message', function(topic, message) {
    // message is Buffer
    console.log(message.toString())
    client.end()
})*/
