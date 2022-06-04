import React from "react";
import angular from "./angular.png";
import react from "./React.png";
import vue from "./vue.png";

import "./index.css";

const Survey = ({ showResults, next }) => {
  const updatedResult = () => {};
  return (
    <div className="question question3">
      <h1 className="header">Favourite Javascript framework/library?</h1>

      {showResults && <div> Show Results</div>}
      {next && <button onClick={next}>Next</button>}

      <div className="radiobutton">
        <div className="seperate">
          <button onClick={() => updatedResult(1)}>
          <img  className="img" src={angular} alt="" /><br />Angular
          </button>
        </div>
        <div className="seperate">
          <button onClick={() => updatedResult(2)}>
          <img  className="img" src={react} alt="" /><br />React
          </button>
        </div>
        <div className="seperate">
          <button onClick={() => updatedResult(3)}>
          <img  className="img" src={vue} alt="" /><br />Vue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Survey;
