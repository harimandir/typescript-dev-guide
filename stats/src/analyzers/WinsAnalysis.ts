import { Analyzer } from "../Summarizer";
import { MatchData } from "../MatchData";
import { MatchResult } from "../MatchResult";

export class WinsAnalysis implements Analyzer {
  wins: number = 0;

  constructor(public team: string, public matches: MatchData[]) {}

  run(): string {
    for (let match of this.matches) {
      if (match[1] === this.team && match[5] === MatchResult.HomeWin) {
        this.wins++;
      } else if (match[2] === this.team && match[5] === MatchResult.AwayWin) {
        this.wins++;
      }
    }
    return `${this.team} won ${this.wins} games`;
  }
}
