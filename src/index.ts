import { shamaison } from "./portal/shamaison";
import { dRoom } from "./portal/dRoom";

declare const global: {
  [x: string]: any;
};

global.shamaison = () => {
  return shamaison();
};

global.droom = () => {
  return dRoom();
};
