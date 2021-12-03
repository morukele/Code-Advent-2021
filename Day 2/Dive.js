const { log } = require("console");
const fs = require("fs");

var array = fs.readFileSync("Day 2/day2.txt").toString().split("\n");

let horizontal = 0;
let depth = 0;

array.forEach((element) => {
  if (element.substr(0, 7) === "forward") {
    let n = Number(element[8]);
    horizontal += n;
  } else if (element.substr(0, 2) === "up") {
    let n = Number(element[3]);
    depth -= n;
  } else if (element.substr(0, 4) === "down") {
    let n = Number(element[5]);
    depth += n;
  }
});

log(horizontal);
log(depth);

const result = horizontal * depth;
log(result);
