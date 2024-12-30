function isDesc(arr) {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    if (arr[i - 1] <= arr[i]) {
      return false;
    }
  }
  return true;
}

function isAsc(arr) {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    if (arr[i - 1] >= arr[i]) {
      return false;
    }
  }
  return true;
}

function problemDampener(arr, funcToTest) {
  let result = {
    value: false,
    element: -1,
  };
  let testArr;
  for (let i = 0; i < arr.length; i++) {
    testArr = arr.toSpliced(i, 1);
    result = {
      value: funcToTest(testArr),
      element: i,
    };
    if (result.value === true) {
      let check = diffChecker(testArr);
      if (check === true) {
        break;
      } else {
        result = {
          value: false,
          element: -1,
        };
      }
    }
  }

  return result;
}

function isOrdered(arr) {
  let originaIsAscend = isAsc(arr);
  let originalIsDescend = isDesc(arr);
  let originalVerdict = { value: false, element: -1 };

  if (originaIsAscend || originalIsDescend) {
    originalVerdict = diffChecker(arr);
  }

  if (originalVerdict.value === true) {
    return originalVerdict.value;
  } else {
    let isAscend = problemDampener(arr, isAsc);
    let isDescend = problemDampener(arr, isDesc);

    return isAscend.value || isDescend.value;
  }
}

function diffChecker(numArray) {
  let bool;
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
  let result = isOrdered(numArray);

  return result;
}

function main() {
  const fs = require("fs");
  const input = fs.readFileSync("./input.txt", "utf-8");
  const lines = input.split("\n");
  let safeCounter = 0;
  for (let i = 0; i < lines.length; i++) {
    let one_line = Array.from(lines[i].split(" "));
    if (isSafe(one_line)) {
      safeCounter += 1;
    }
  }

  console.log(safeCounter);
  return safeCounter;
}

main();
