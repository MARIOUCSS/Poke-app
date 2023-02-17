import React from "react";
import { DotSpinner } from "@uiball/loaders";
const Loadd = () => {
  return (
    <div className="container-loader">
      <DotSpinner size={40} speed={0.9} color="black" />;
    </div>
  );
};

export default Loadd;
