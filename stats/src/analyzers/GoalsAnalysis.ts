import { Analyzer } from "../Summarizer";
import { MatchData } from "../MatchData";
import { MatchResult } from "../MatchResult";

export class GoalsAnalysis implements Analyzer {
  goalsAverage: number = 0;

  constructor(public team: string, public matches: MatchData[]) {}

  run(): string {
    let goals = 0,
      matches = 0;
    for (let match of this.matches) {
      if (match[1] === this.team && match[5] === MatchResult.HomeWin) {
        goals++;
      } else if (match[2] === this.team && match[5] === MatchResult.AwayWin) {
        goals++;
      }
      matches++;
    }
    this.goalsAverage = goals / matches;
    return `${this.team} averaged ${this.goalsAverage.toFixed(
      2
    )} goals per match`;
  }
}
