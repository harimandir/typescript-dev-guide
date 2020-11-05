import { Import, Summarize } from "./Facades";

const team = "Chelsea";
const matches = Import.matches("football.csv");

Summarize.winsToConsole(team, matches);
Summarize.goalsToConsole(team, matches);

Summarize.winsToHtml(team, matches, "wins.html");
Summarize.goalsToHtml(team, matches, "goals.html");
