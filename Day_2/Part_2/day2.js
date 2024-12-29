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
      break;
    }
  }

  return result;
}

function isOrdered(arr) {
  // let isAscend = isAsc(arr);
  // let isDescend = isDesc(arr);
  let isAscend = problemDampener(arr, isAsc);
  let isDescend = problemDampener(arr, isDesc);
  let result = {
    value: false,
    element: -1,
  };

  // RUN DIFF CHECKER HERE
  let eitherSorted = isAscend || isDescend;

  return eitherSorted;
  // if (eitherSorted) {
  //   result = {
  //     value: true,
  //     element: -1,
  //   };
  //   return result;
  // }

  // if (!isAscend) {
  //   result = problemDampener(arr, isAsc);
  // }
  // if (result.value === false) {
  //   result = problemDampener(arr, isDesc);
  // }
  // if (!isDescend) {
  //   result = problemDampener(arr, isDesc);
  // }
  // return result;
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
  let bool;
  let result = isOrdered(numArray);
  let newArray;

  if (result.value === true) {
    newArray =
      result.element > -1 ? numArray.toSpliced(result.element, 1) : numArray;
    // bool = diffChecker(newArray); <--- FIGURE OUT WHAT TO DO WITH THIS
  } else {
    bool = false;
  }
  return bool;
}

function main() {
  const fs = require("fs");
  const input = fs.readFileSync("./input.txt", "utf-8");
  const lines = input.split("\n");
  let safeCounter = 0;
  for (let i = 0; i < 3 /*lines.length*/; i++) {
    let one_line = Array.from(lines[i].split(" "));
    if (isSafe(one_line)) {
      safeCounter += 1;
    }
  }
  console.log(safeCounter);
  return safeCounter;
}

main();
