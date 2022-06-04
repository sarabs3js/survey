import React from "react";
import vanilla from "./vanilla.webp";
import choclate from "./choclate.jpg";
import butter from "./butter.webp";

import "./index.css";

const QuestionOne = ({ showResults, next }) => {
  const updatedResult = () => {};
  return (
    <div className="question1">
      <h1 class="header">What's your favourite icecream?</h1>

      {showResults && <div> Show Results</div>}
      {next && <button onClick={next}>Next</button>}

      <div class="radiobutton">
        <div class="seperate">
          <button onClick={() => updatedResult(1)}>
            <img class="img" src={vanilla} alt="" />
            <br />
            Vanilla
          </button>
        </div>
        <div class="seperate">
          <button onClick={() => updatedResult(2)}>
            {" "}
            <img class="img" src={choclate} alt="" />
            <br />
            Choclate
          </button>
        </div>
        <div class="seperate">
          <button onClick={() => updatedResult(3)}>
            <img class="img" src={butter} alt="" />
            <br />
            Butter Scotch
          </button>
        </div>
        <div class="seperate">
          <button onClick={() => updatedResult(4)}>Other</button>
        </div>
      </div>
    </div>
  );
};

export default QuestionOne;
