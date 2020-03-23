//TO DO:
//ComponentLoader is fixed to test
//create style to components
//create converts of object properties to IComponents
//create others IComponents
//separete this file in N files
//find the best way to build in release the TypeScript
//incapsulate main program in a App class

interface IComponent
{
  Name : string;
  Value : string;
  Description : string;

  Build(screen: ComponentScreen) : void;
}

class ComponentScreen
{
  private document : Document;
  private areaToWrite : HTMLElement;

  constructor(){
    this.document = document;
    this.areaToWrite = document.currentScript.parentElement;
  }

  public AddNewLine() : void {
    var lineBreak = this.document.createElement("br");
    this.areaToWrite.appendChild(lineBreak);
  }

  public AddHTML(html : string) : void {
    this.areaToWrite.innerHTML += html;
  }
}


class TextComponent implements IComponent
{
  public Name: string;
  public Value: string;
  public Description: string;

  Build(componentScreen: ComponentScreen): void {
    const html = 
        `<label for="${this.Name}">${this.Description}:</label>
          <input type="text" id="${this.Name} value="${this.Name}"/>`;

    componentScreen.AddHTML(html);
  }
}


class ComponentScreenBuilder {
  private componentScreen : ComponentScreen;
  private components : IComponent[]

  constructor(componentScreen : ComponentScreen, components : IComponent[]) {
    this.componentScreen = componentScreen;
    this.components = components;
  }

  public Build() : void {
    for (let component of this.components) {
      component.Build(this.componentScreen);
      this.componentScreen.AddNewLine();
    }
  }
}


class ComponentLoader {
  public Load() : IComponent[] {
    //sample obejec revived by a web api
    let myObj = {
      param1: "string value 1",
      param2: "string value 2",
      param3: "string value 3",
      param4: "string value 4",
      param5: "string value 5",
      otherProperty: "Öther value"
    };

    const propertiesNameOfObeject : string[] = Object.getOwnPropertyNames(myObj);
    const components : IComponent[] = [];

    for (let propName of propertiesNameOfObeject) {
      const component = new TextComponent()
      component.Description = propName;
      component.Name = propName;

      components.push(component)
    }
    
    return components;
  }
}



//APP BEGIN
const componentScreen = new ComponentScreen();

const loader = new ComponentLoader();
const components = loader.Load();

const builder = new ComponentScreenBuilder(componentScreen, components);
builder.Build();