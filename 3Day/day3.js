function main() {
  const fs = require("fs");
  const input = fs.readFileSync("./input.txt", "utf-8");
  let total = 0;
  const reg = /mul\(\d{1,3},\d{1,3}\)/g;
  const lines = input.split("\n");

  for (let i = 0; i < lines.length; i++) {
    const one_line = lines[i];

    // console.log(one_line);
    const matches = [...one_line.matchAll(reg)];
    console.log(matches);
  }
}

main();
