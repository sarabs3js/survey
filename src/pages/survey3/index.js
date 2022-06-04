import React from "react";
import angular from "./angular.png";
import react from "./React.png";
import vue from "./vue.png";

import "./index.css";

const Survey = ({ showResults, next }) => {
  const updatedResult = () => {};
  return (
    <div className="question question3">
      <h1 class="header">Favourite Javascript framework/library?</h1>

      {showResults && <div> Show Results</div>}
      {next && <button onClick={next}>Next</button>}

      <div class="radiobutton">
        <div class="seperate">
          <button onClick={() => updatedResult(1)}>
          <img  class="img" src={angular} alt="" /><br />Angular
          </button>
        </div>
        <div class="seperate">
          <button onClick={() => updatedResult(2)}>
          <img  class="img" src={react} alt="" /><br />React
          </button>
        </div>
        <div class="seperate">
          <button onClick={() => updatedResult(3)}>
          <img  class="img" src={vue} alt="" /><br />Vue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Survey;
