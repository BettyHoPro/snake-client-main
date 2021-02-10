const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: "135.23.222.131",
    port: 50542,
  });
  conn.setEncoding("utf8");
  
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });
  conn.on("connect", () => {
    console.log("Successfully connected to game server, rock-in-roll!🥰");
    conn.write("Name: BB🐠");
  });
  return conn;
};

module.exports = {connect};