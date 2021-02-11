let connection;
const { keyAction } = require('./constants');
const setupInput = (conn) => {
  connection = conn;
  const handleUserInput = (data) => {
    
    if (data === "\u0003") {
      process.exit();
    }
    conn.write(keyAction[data]);
  };
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
module.exports = { setupInput };