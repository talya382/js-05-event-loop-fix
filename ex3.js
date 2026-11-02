// ex3.js

function print(i){
    setTimeout(() => console.log(i), 0);
}

function run() {
  for (var i = 0; i < 3; i++) {
  print(i)
  }
}

if (typeof module !== "undefined") module.exports = { run };
