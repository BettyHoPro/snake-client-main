const { connect } = require("./client");
console.log("Connecting ...");
connect();

const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  const handleUserInput = (data) => {
    stdin.on('data', (key) => {
      if (key === '\u0003') {
        process.exit();
      }
    });
  };
  stdin.resume();
  handleUserInput();
  return stdin;
};
setupInput();

