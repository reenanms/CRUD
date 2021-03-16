import IComponent from "./IComponent"
import ComponentScreen from "./ComponentScreen"

export default class TextComponent implements IComponent {
  public name!: string;
  public value!: string;
  public description!: string;

  public build(componentScreen: ComponentScreen): void {
    const html =
    `<label for="${this.name}">${this.description}:</label>
     <input type="text" id="${this.name}" value="${this.value}"/>`;
    
     componentScreen.addHTML(html);
  }
}
