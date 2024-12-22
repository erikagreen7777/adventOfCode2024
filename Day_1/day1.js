const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8'); 
let leftList = [];
let rightList = [];
let differenceArray = [];

const lines = input.split('\n'); 

// Separate columns
for (let i = 0; i< lines.length; i++) {
    let one_line = Array.from(lines[i].split(/\s/));
    let end = one_line.length-1;
    leftList = [...leftList, one_line[0]];
    rightList = [...rightList, one_line[end]];
}

leftList = leftList.sort();
rightList = rightList.sort();


// Create array of element differences
for (let i = 0; i < lines.length ; i++) {
    let greaterNumber = leftList[i] >= rightList[i] ? leftList[i] : rightList[i];
    let smallerNumber = leftList[i] < rightList[i] ? leftList[i] : rightList[i]; 
    let difference = greaterNumber - smallerNumber;
    /* TODO:
    substitute difference with abslute values (Math.abs())
    */
    differenceArray = [...differenceArray, difference]
}

// Sum element differences array
const total_difference = differenceArray.reduce((acc, curr) => acc + curr)

console.log(total_difference)
