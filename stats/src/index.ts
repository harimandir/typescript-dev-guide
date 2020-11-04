import { FootballMatchLoader } from "./FootballMatchLoader";
import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResult";

const loader = new FootballMatchLoader(new CsvFileReader("football.csv"));
loader.load();
const matches = loader.data;

let chelseaWins = 0;

for (let match of matches) {
  if (match[1] === "Chelsea" && match[5] === MatchResult.HomeWin) {
    chelseaWins++;
  } else if (match[2] === "Chelsea" && match[5] === MatchResult.AwayWin) {
    chelseaWins++;
  }
}

console.log(`Chelsea won ${chelseaWins} games`);
