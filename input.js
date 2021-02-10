const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  const handleUserInput = (data) => {
    stdin.on('data', (key) => {
      if (key === '\u0003') {
        process.exit();
      } else if (key === "w") {
        console.log("up");
      } else if (key === "a") {
        console.log("left");
      } else if (key === "s") {
        console.log("down");
      } else if (key === "d") {
        console.log("right");
      }
    });
  };
  stdin.resume();
  handleUserInput();
  return stdin;
};
module.exports = { setupInput };