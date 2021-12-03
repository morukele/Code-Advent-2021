const { log } = require("console");
const fs = require("fs");

var array = fs.readFileSync("Day 1/day1.txt").toString().split("\n");

var measurements = [];
array.forEach((element) => {
  measurements.push(Number(element));
});

// Firs part
const numberOfIncreased = (array) => {
  var count = 0;

  for (let i = 1; i < array.length; i++) {
    if (array[i] > array[i - 1]) {
      count++;
    }
  }

  log(count);
};

numberOfIncreased(measurements);

//Second part
const slidingWindow = (array, size) => {
  const result = [];
  for (let i = 0; i <= array.length - size; i++) {
    var output = 0;
    for (let j = i; j < i + size; j++) {
      output += array[j];
    }
    result.push(output);
  }

  return result;
};

const window = slidingWindow(measurements, 3);
numberOfIncreased(window);
