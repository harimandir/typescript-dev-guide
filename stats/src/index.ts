import fs from "fs";

const matches = fs
  .readFileSync("football.csv", "utf-8")
  .split("\n")
  .map((row: string) => row.split(","));

let chelseaWins = 0;

for (let match of matches) {
  if (match[1] === "Chelsea" && match[5] === "H") {
    chelseaWins++;
  } else if (match[2] === "Chelsea" && match[5] === "A") {
    chelseaWins++;
  }
}

console.log(`Chelsea won ${chelseaWins} games`);
