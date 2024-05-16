import React from "react";
import loadingGiff from "../Components/Image/loading.gif";
function LoadingSpinner() {
  return (
    <div>
      <center className="wel-msg">
        <img src={loadingGiff} alt="Loading..." />
      </center>
    </div>
  );
}

export default LoadingSpinner;
