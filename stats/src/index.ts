import fs from "fs";

const matches = fs
  .readFileSync("football.csv", "utf-8")
  .split("\n")
  .map((row: string) => row.split(","));

const homeWin = "H";
const awayWin = "A";
const draw = "D"; // unused

let chelseaWins = 0;

for (let match of matches) {
  if (match[1] === "Chelsea" && match[5] === homeWin) {
    chelseaWins++;
  } else if (match[2] === "Chelsea" && match[5] === awayWin) {
    chelseaWins++;
  }
}

console.log(`Chelsea won ${chelseaWins} games`);
