$(document).ready( function() {
// Create a client instance
client = new Paho.MQTT.Client(location.hostname, 80, "9diDmrXM221QkqVYuzm2t");
// client = new Paho.MQTT.Client("iot.eclipse.org", 80, "9diDmrXM221QkqVYuzm2t");

// set callback handlers
client.onConnectionLost = onConnectionLost;
client.onMessageArrived = onMessageArrived;

var options = {

     //connection attempt timeout in seconds
     timeout: 3,

     //Gets Called if the connection has successfully been established
     onSuccess: onConnect,

     //Gets Called if the connection could not be established
     onFailure: function (message) {
         alert("Connection failed: " + message.errorMessage);
     }

};

// connect the client
client.connect(options);

});

// called when the client connects
function onConnect() {
  // Once a connection has been made, make a subscription and send a message.
  console.log("onConnect " + client.isConnected());
  client.subscribe("testtopic/#");
  message = new Paho.MQTT.Message("Hello from non-minified Paho!");
  message.destinationName = "testtopic/1";
  try {
    client.send(message);
  } catch(err) {
    console.log(err);
  }
}

// called when the client loses its connection
function onConnectionLost(responseObject) {
  console.log("onConnectionLost:"+responseObject.errorMessage);
}

// called when a message arrives
function onMessageArrived(message) {
  console.log("onMessageArrived:"+message.payloadString);
}
