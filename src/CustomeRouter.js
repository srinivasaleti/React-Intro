import React from "react";
import Calculator from "./Calculator/Calculator";
import LifeCycleDemo from "./LifeCycleDemo/LifeCycleDemo";
import Movies from "./Movies/Movies";
import { Route } from "react-router-dom";
import { ParentToChildComponent } from './ParentToChild/ParentToChild';
import { ChildToParentDemo } from './ChildToParent/ChildToParent';
import { SiblingCommunicationDemo } from './SiblingCommunication/ChildToParent';
import { EvenOrOdd } from './InputEvent/InputEvent';
export function CustomeRouter() {
  return (
    <div>
      <Route path="/movies" component={Movies} />
      <Route path="/calc" component={Calculator} />
      <Route path="/life-cycle" component={LifeCycleDemo} />
      <Route path="/parent-to-child" component={ParentToChildComponent} />
      <Route path="/child-to-parent" component={ChildToParentDemo} />
      <Route path="/child-to-child" component={SiblingCommunicationDemo} />
      <Route path="/input-event" component={EvenOrOdd} />
    </div>
  );
}
