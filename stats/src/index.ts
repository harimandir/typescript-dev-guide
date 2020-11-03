import fs from "fs";

const matches = fs
  .readFileSync("football.csv", "utf-8")
  .split("\n")
  .map((row: string) => row.split(","));
console.log(matches);
