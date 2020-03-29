import IComponent from "./IComponent.js"
import ComponentScreen from "./ComponentScreen.js"

export default class TextComponent implements IComponent {
  public Name!: string;
  public Value!: string;
  public Description!: string;

  public Build(componentScreen: ComponentScreen): void {
    const html = `<label for="${this.Name}">${this.Description}:</label>
          <input type="text" id="${this.Name} value="${this.Name}"/>`;
    componentScreen.AddHTML(html);
  }
}
