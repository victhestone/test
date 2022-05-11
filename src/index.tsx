import { render } from "react-dom";
import * as ng from "angular";
import { react2angular } from "react2angular";

import { registerMyNgComponent, reactNgComponent } from "./MyNgComponent";

import MyReactComponent from "./MyReactComponent";

const ngRoot = document.getElementById("angular-root");
if (!ngRoot) {
  throw new Error("missing node");
}

let injector: ng.auto.IInjectorService;

const module = ng.module("ng-module", []);
registerMyNgComponent(module);
console.log("bootstrap");
module.run(($injector: ng.auto.IInjectorService) => {
  injector = $injector;

  const reactRoot = document.getElementById("react-root");
  const ReactNgComponent = reactNgComponent(injector);
  render(
    <ReactNgComponent atBinding="atBinding" ltBinding="ltBinding" />,
    reactRoot
  );
});
ng.bootstrap(ng.element(ngRoot), [module.name], {
  strictDi: false
});
