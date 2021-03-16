export default class ComponentScreen {
  private document: Document;
  private areaToWrite: Element;

  public constructor(elementId: string) {
    this.document = document;
    this.areaToWrite = document.getElementById(elementId) as Element;
  }

  public addNewLine(): void {
    var lineBreak = this.document.createElement("br");
    this.areaToWrite.appendChild(lineBreak);
  }

  public addHTML(html: string): void {
    this.areaToWrite.innerHTML += html;
  }
}
