import React from "react";
import windows from "./windows.png";
import linux from "./linux.png";
import apple from "./apple.webp";

import "./index.css";

const Survey = ({ showResults, next }) => {
  const updatedResult = () => {};
  return (
    <div className="question question3">
      <h1 class="header">Favourite Operating System?</h1>

      {showResults && <div> Show Results</div>}
      {next && <button onClick={next}>Next</button>}

      <div class="radiobutton">
        <div class="seperate">
          <button onClick={() => updatedResult(1)}>
          <img  class="img" src={windows} alt="" /><br />Windows
          </button>
        </div>
        <div class="seperate">
          <button onClick={() => updatedResult(2)}>
          <img  class="img" src={linux} alt="" /><br />Linux
          </button>
        </div>
        <div class="seperate">
          <button onClick={() => updatedResult(3)}>
          <img  class="img" src={apple} alt="" /><br />Mac
          </button>
        </div>
      </div>
    </div>
  );
};

export default Survey;
