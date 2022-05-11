import type * as ng from "angular";
import { angular2react } from "angular2react";
class MyNgController {
  public atBinding: string = "";
  public ltBinding: string = "";
  constructor() {
    console.log("constructor called ");
  }

  public $onInit(): void {
    console.log("$onInit called ");
  }
}

const myNgComponentOptions = {
  controller: MyNgController,
  bindings: {
    atBinding: "@",
    ltBinding: "<"
  },
  template: `
    
        <h1> This is Angular content</h1>          
        <div> atBinding: {{$ctrl.atBinding}} </div>
        <div> ltBinding: {{$ctrl.ltBinding}} </div>
  `
};
const myNgComponentName = "myNgComponent";

export function registerMyNgComponent(module: ng.IModule) {
  module.component(myNgComponentName, myNgComponentOptions);
}

export function reactNgComponent($injector: ng.auto.IInjectorService) {
  return angular2react(myNgComponentName, myNgComponentOptions, $injector);
}
