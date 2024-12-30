function main() {
  const fs = require("fs");
  const input = fs.readFileSync("./input.txt", "utf-8");
  let total = 0;
  const reg = /mul\(\d{1,3},\d{1,3}\)/g;
  const lines = input.split("\n");

  for (let i = 0; i < lines.length; i++) {
    const one_line = lines[i];
    const matches = [...one_line.matchAll(reg)];
    for (let j = 0; j < matches.length; j++) {
      const match = matches[j][0];
      const num1 = match.split("(")[1].split(",")[0];
      const num2 = match.split("(")[1].split(",")[1].split(")")[0];
      const prod = num1 * num2;
      total += prod;
    }
  }
  console.log(total);
}

main();
