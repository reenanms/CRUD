import IComponent from './IComponent.js'
import TextComponent from './TextComponent.js'

export default class ComponentLoader {
  public Load(): IComponent[] {
    //sample obejec revived by a web api
    let myObj = {
      param1: "string value 1",
      param2: "string value 2",
      param3: "string value 3",
      param4: "string value 4",
      param5: "string value 5",
      otherProperty: "Öther value"
    };

    const propertiesNameOfObeject: string[] = Object.getOwnPropertyNames(myObj);
    const components: IComponent[] = [];
    for (let propName of propertiesNameOfObeject) {
      const component = new TextComponent();
      component.Description = propName;
      component.Name = propName;

      components.push(component);
    }
    
    return components;
  }
}
