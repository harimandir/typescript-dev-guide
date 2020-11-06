export class UserForm {
  constructor(public parent: Element) {}

  template(): string {
    return `
        <div>
            <h1>User Form</h1>
            <input /> <button>Button</button>
        </div>
    `;
  }

  onButtonClick(): void {
    console.log("button clicked");
  }

  events(): { [key: string]: () => void } {
    return {
      "click:button": this.onButtonClick,
    };
  }

  render(): void {
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();
    this.parent.append(templateElement.content);
  }
}
