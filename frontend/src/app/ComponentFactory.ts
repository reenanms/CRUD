import IComponent from './IComponent';
import TextComponent from './TextComponent';

export default class ComponentFactory {
  private static types = {
    "string": () => new TextComponent()
  };

  public static create(typeName: string): IComponent {
    return this.types[typeName]();
  }
}
