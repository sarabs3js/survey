import React from "react";
import instagram from "./instagram.webp";
import twitter from "./twitter.png";
import fb from "./fb.png";

import "./index.css";

const QuestionTwo = ({ showResults, next }) => {
  const updatedResult = () => {};
  return (
    <div className="question2">
      <h1 class="header">What's your favourite Social Media Platform?</h1>

      {showResults && <div> Show Results</div>}
      {next && <button onClick={next}>Next</button>}

      <div class="radiobutton">
        <div class="seperate">
          <button onClick={() => updatedResult(1)}>
          <img  class="img" src={instagram} alt="" /><br />Instagram
          </button>
        </div>
        <div class="seperate">
          <button onClick={() => updatedResult(2)}>
          <img  class="img" src={twitter} alt="" /><br />Twitter
          </button>
        </div>
        <div class="seperate">
          <button onClick={() => updatedResult(3)}>
          <img  class="img" src={fb} alt="" /><br />Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuestionTwo;
