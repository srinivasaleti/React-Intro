import React from "react";
import { Link } from "react-router-dom";
export function Links() {
  return (
    <div className="links">
      <Link to="/movies">Movies</Link> <br />
      <Link to="/calc">Calculator</Link>
      <br />
      <Link to="life-cycle">LifeCycleDemo</Link>
      <br />
      <Link to="parent-to-child">Parent To Child</Link>
      <br />
      <Link to="child-to-parent">Child To Parent</Link>
      <br />
      <Link to="child-to-child">Child To Child</Link>
      <br />
      <Link to="input-event">Input Event Demo</Link>
      <br />
      <Link to="get-api">Get Api Demo</Link>
    </div>
  );
}
