import IComponent from './IComponent'
import IComponentDefinition from './IComponentDefinition'
import ComponentFactory from './ComponentFactory';


export default class ComponentLoader {
  private configuration : Record<string, IComponentDefinition>;

  public constructor(configuration : Record<string, IComponentDefinition>) {
    this.configuration = configuration;
  }

  public load(objToShow : Object) : IComponent[] {
    const propertiesName : string[] = Object.getOwnPropertyNames(objToShow);
    const components : IComponent[] = [];

    for (let propertyName of propertiesName) {
      const propertyConfig = this.configuration[propertyName];

      const component = ComponentFactory.create(propertyConfig.type);
      component.description = propertyConfig.label;
      component.name = propertyName;
      component.value = objToShow[propertyName];

      components.push(component);
    }
    
    return components;
  }
}
