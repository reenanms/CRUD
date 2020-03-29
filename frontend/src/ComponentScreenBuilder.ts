import IComponent from "./IComponent.js"
import ComponentScreen from "./ComponentScreen"

export default class ComponentScreenBuilder {
  private componentScreen: ComponentScreen;
  private components: IComponent[];

  public constructor(componentScreen: ComponentScreen, components: IComponent[]) {
    this.componentScreen = componentScreen;
    this.components = components;
  }
  
  public Build(): void {
    for (let component of this.components) {
      component.Build(this.componentScreen);
      this.componentScreen.AddNewLine();
    }
  }
}
