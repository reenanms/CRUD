import ComponentScreen from "./ComponentScreen.js"

export default interface IComponent {
  Name: string;
  Value: string;
  Description: string;
  Build(screen: ComponentScreen): void;
}
