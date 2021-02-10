let connection;

const setupInput = (conn) => {
  connection = conn;
  const handleUserInput = (data) => {
    
    if (data === "\u0003") {
      process.exit();
    }
    if (data === "w") {
      conn.write("Move: up");
      console.log("up");
    } else if (data === "a") {
      conn.write("Move: left");
      console.log("left");
    } else if (data === "s") {
      conn.write("Move: down");
      console.log("down");
    } else if (data === "d") {
      conn.write("Move: right");
      console.log("right");
    } else if (data === "q") {
      conn.write("Say: nice game!");
    } else if (data === "1") {
      conn.write("Say: Hi!");
    } else if (data === "2") {
      conn.write("Say: ^ ^ ~");
    }
   
    // setInterval(() => {
    //   conn.write("Move: left");
    // }, 50);
  };
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  //handleUserInput();
  return stdin;
};
module.exports = { setupInput };
