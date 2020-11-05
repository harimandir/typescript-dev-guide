import { OutputTarget } from "../Summarizer";

export class ConsoleReport implements OutputTarget {
  print(output: string): void {
    console.log(output);
  }
}
