import fs from "fs";

const matches = fs
  .readFileSync("football.csv", "utf-8")
  .split("\n")
  .map((row: string) => row.split(","));

enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}

let chelseaWins = 0;

for (let match of matches) {
  if (match[1] === "Chelsea" && match[5] === MatchResult.HomeWin) {
    chelseaWins++;
  } else if (match[2] === "Chelsea" && match[5] === MatchResult.AwayWin) {
    chelseaWins++;
  }
}

console.log(`Chelsea won ${chelseaWins} games`);
