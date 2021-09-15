import { shamaison } from "./portal/shamaison";

declare const global: {
  [x: string]: any;
};

global.shamaison = () => {
  return shamaison();
};
