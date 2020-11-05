export interface Analyzer {
  run(): string;
}

export interface OutputTarget {
  print(analysis: string): void;
}

export class Summarizer {
  constructor(protected analyzer: Analyzer, protected target: OutputTarget) {}
  report(): void {
    this.target.print(this.analyzer.run());
  }
}
