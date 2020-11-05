import { OutputTarget } from "../Summarizer";

export class ConsoleTarget implements OutputTarget {
  print(output: string): void {
    console.log(output);
  }
}
