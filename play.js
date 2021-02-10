const connectOB = require("./client");
const { setupInput }  = require('./input');
console.log("Connecting ...");
//connect();

setupInput(connectOB.connectOBValue());

