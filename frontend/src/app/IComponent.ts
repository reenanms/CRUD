import ComponentScreen from "./ComponentScreen"

export default interface IComponent {
  name: string;
  value: string;
  description: string;
  build(screen: ComponentScreen): void;
}
