const net = require("net");
const { IP, PORT, playerName } = require('./constants');
const connectFunc = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });
  conn.setEncoding("utf8");
  
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });
  conn.on("connect", () => {
    console.log("Successfully connected to game server, rock-in-roll!🥰");
    conn.write(`Name: ${playerName}`);
  });
  return conn;
};


module.exports = { connectOBValue: connectFunc };