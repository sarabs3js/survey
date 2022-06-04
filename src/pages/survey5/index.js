import React from "react";
import aws from "./aws.jpg";
import azure from "./azure.png";
import apple from "./google.png";

import "./index.css";

const Survey = ({ showResults, next }) => {
  const updatedResult = () => {};
  return (
    <div className="question question3">
      <h1 class="header">Favourite Cloud Solution?</h1>

      {showResults && <div> Show Results</div>}
      {next && <button onClick={next}>Next</button>}

      <div class="radiobutton">
        <div class="seperate">
          <button onClick={() => updatedResult(1)}>
          <img class="img" src={aws} alt="" /><br />Aws
          </button>
        </div>
        <div class="seperate">
          <button onClick={() => updatedResult(2)}>
          <img class="img" src={azure} alt="" /><br />Azure
          </button>
        </div>
        <div class="seperate">
          <button onClick={() => updatedResult(3)}>
          <img class="img" src={apple} alt="" /><br />Gpc
          </button>
        </div>
      </div>
    </div>
  );
};

export default Survey;
