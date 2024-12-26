const fs = require('fs');

const input = fs.readFileSync('./input.txt', 'utf-8');

const lines = input.split('\n');
let safeCounter = 0;

function isDesc(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        if (arr[i - 1] <= arr[i]) {
            return false;
        }
    }
    console.log(`isDesc yes: ${arr}`);
    return true;
}

function isAsc(arr) {
    const n = arr.length;
    for (let i = 1; i < n; i++) {
        if (arr[i - 1] >= arr[i]) {
            return false;
        }
    }
    console.log(`isAsc yes: ${arr}`);
    return true;
}

function problemDampener(arr, funcToTest) {
    let result;
    let testArr;
    for (let i = 0; i < arr.length; i++) {
        testArr = arr.toSpliced(i, 1);
        result = {
            value: funcToTest(testArr),
            element: i
        };
        // Object.keys(result).forEach(key => {
        //     console.log(`hey: ${key}: ${result[key]}`);
        //     console.log(`result.value: ${result.value}`);
        // });
        if (result.value === true) {
            // console.log(`true`);
            break;
        }
    }

    return result;
}

function isOrdered(arr) {
    let isAscend = isAsc(arr);
    let isDescend = isDesc(arr);
    let result;

    if (!isAscend) {
        result = problemDampener(arr, isAsc);
    }

    if (!isDescend) {
        result = problemDampener(arr, isDesc)
    }

    Object.keys(result).forEach(key => {
        console.log(`isordered: ${key}: ${result[key]}`);
    });
    
    return result;
}

function diffChecker(numArray) {
    for (let i = 1; i < numArray.length; i++) {
        const diff = Math.abs(numArray[i] - numArray[i - 1]);
        if (diff > 3) {
            bool = false;
            break;
        } else {
            bool = true;
        }
    }
    return bool;
}

function isSafe(arr) {
    let numArray = arr.map(Number);
    let bool = false;
    let result = isOrdered(numArray);

    if (result.value === true) {
        bool = diffChecker(numArray);
    }
    return bool;
}

for (let i = 0; i <  lines.length ; i++) {
    let one_line = Array.from(lines[i].split(' '));
    if (isSafe(one_line)) {
        safeCounter += 1;
    }
}
console.log(safeCounter);
