import React from "react";
import Calculator from "./Calculator/Calculator";
import LifeCycleDemo from "./LifeCycleDemo/LifeCycleDemo";
import Movies from "./Movies/Movies";
import { Route } from "react-router-dom";
export function CustomeRouter() {
  return (
    <div>
      <Route path="/movies" component={Movies} />
      <Route path="/calc" component={Calculator} />
      <Route path="/life-cycle" component={LifeCycleDemo} />
    </div>
  );
}
