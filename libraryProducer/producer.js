const config = require('../config.json');

var kafka = require('kafka-node'),
    Producer = kafka.Producer,
    client = new kafka.Client(config.connectionString,config.clientId);
    producer = new Producer(client);
    
function registeredProducer(topicName,message, callback) {
payloads = [
        { topic: `${topicName}`, messages: `${message}`}
    ];
producer.on('ready', function () {
    producer.send(payloads, function (err, data) {
        if(err) { console.log(`${err}`); return; }
              return callback(payloads[0].messages);
});
});
producer.on('error', function (err) { console.log(`${err}`); return; })
}

module.exports = { registeredProducer };
