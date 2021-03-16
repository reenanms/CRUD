//APP BEGIN
//TO DO:
//OK: separete this file in N files
//======================================
//componentLoader is fixed to test
//create style to components
//create converts of object properties to IComponents
//create others IComponents
//find the best way to build in release the TypeScript
//incapsulate main program in a App class

import ComponentScreen from "./ComponentScreen"
import ComponentLoader from "./ComponentLoader"
import ComponentScreenBuilder from "./ComponentScreenBuilder"


const componentScreen = new ComponentScreen('myScreen');


//sample obejec revived by a web api
let objToShow = {
    param1: "string value 1",
    param2: "string value 2",
    param3: "string value 3",
    param4: "string value 4",
    param5: "string value 5",
    otherProperty: "Other value"
  };

let configuration = {
    param1: { type:"string", label:"Param teste 1:", params:[] },
    param2: { type:"string", label:"Param 2:", params:[] },
    param3: { type:"string", label:"Param 3:", params:[] },
    param4: { type:"string", label:"Param 4:", params:[] },
    param5: { type:"string", label:"Param 5:", params:[] },
    otherProperty: { type:"string", label:"Other:", params:[] }
  };

const loader = new ComponentLoader(configuration);
const components = loader.load(objToShow);

const builder = new ComponentScreenBuilder(componentScreen, components);
builder.build();
