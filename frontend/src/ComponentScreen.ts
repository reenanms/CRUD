export default class ComponentScreen {
  private document: Document;
  private areaToWrite: Element;

  public constructor(elementId: string) {
    this.document = document;
    console.log(elementId);
    console.log(document.getElementById(elementId));

    this.areaToWrite = document.getElementById(elementId) as Element;
  }

  public AddNewLine(): void {
    var lineBreak = this.document.createElement("br");
    this.areaToWrite.appendChild(lineBreak);
  }

  public AddHTML(html: string): void {
    this.areaToWrite.innerHTML += html;
  }
}
