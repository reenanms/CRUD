import IComponent from "./IComponent"
import ComponentScreen from "./ComponentScreen"

export default class ComponentScreenBuilder {
  private componentScreen: ComponentScreen;
  private components: IComponent[];

  public constructor(componentScreen: ComponentScreen, components: IComponent[]) {
    this.componentScreen = componentScreen;
    this.components = components;
  }
  
  public build(): void {
    for (let component of this.components) {
      component.build(this.componentScreen);
      this.componentScreen.addNewLine();
    }
  }
}
