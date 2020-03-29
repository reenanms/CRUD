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

import ComponentScreen from "./ComponentScreen.js"
import ComponentLoader from "./ComponentLoader.js"
import ComponentScreenBuilder from "./ComponentScreenBuilder.js"


const componentScreen = new ComponentScreen('myScreen');

const loader = new ComponentLoader();
const components = loader.Load();

const builder = new ComponentScreenBuilder(componentScreen, components);
builder.Build();