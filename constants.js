const IP = "135.23.222.131";
const PORT = 50542;
const playerName = process.argv[2];
const keyAction = {
  "w": "Move: up",
  "a": "Move: left",
  "s": "Move: down",
  "d": "Move: right",
  "q": "Say: nice game!",
  "1": "Say: Hi!",
  "2": "Say: ^ ^ ~",
  "e": "Say: Let's hang out!",
  "z": "Say: Let's drink bbt!"
};
 
module.exports = {IP, PORT, playerName, keyAction};