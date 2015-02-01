$(document).ready( function() {

// generate a unique client ID
if (!Date.now) {
  Date.now = function() { return new Date().getTime(); }
}

// Create a client instance
client = new Paho.MQTT.Client(location.hostname, 80, Date.now() + "CUBE" );

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
  client.subscribe("robodino/#");
}

// called when the client loses its connection
function onConnectionLost(responseObject) {
}

// called when a message arrives
function onMessageArrived(message) {
  if (message.payloadString =="1") {
    cubeParams.rotateCube1 = false;

  setTimeout(function() {
    cubeParams.rotateCube1 = true;
  }, 1000);

  }
  else if (message.payloadString =="2") {
    cubeParams.rotateCube2 = false;

  setTimeout(function() {
    cubeParams.rotateCube2 = true;
  }, 2000);

  }
}

$(document).ready( function() {

  setTimeout(function() {
    cubeParams.rotateCube3 = false;
  }, 3000);

  setTimeout(function() {
    cubeParams.rotateCube4 = false;
  }, 4000);

  setTimeout(function() {
    cubeParams.rotateCube3 = true;
  }, 7000);

  setTimeout(function() {
    cubeParams.rotateCube4 = true;
  }, 8000);

});
