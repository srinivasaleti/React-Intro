import React from "react";
import Calculator from "./Calculator/Calculator";
import LifeCycleDemo from "./LifeCycleDemo/LifeCycleDemo";
import Movies from "./Movies/Movies";
import { Route } from "react-router-dom";
import { ParentToChildComponent } from './ParentToChild/ParentToChild';
export function CustomeRouter() {
  return (
    <div>
      <Route path="/movies" component={Movies} />
      <Route path="/calc" component={Calculator} />
      <Route path="/life-cycle" component={LifeCycleDemo} />
      <Route path="/parent-to-child" component={ParentToChildComponent} />
    </div>
  );
}
