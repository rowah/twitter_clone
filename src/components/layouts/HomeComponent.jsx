import React from "react";
import Aside from "../common/sidebar/Aside";

export default function HomeComponent() {
  return (
    <div className="mx-20 mt-4 flex">
      <Aside />
      <h1>Home</h1>
    </div>
  );
}
