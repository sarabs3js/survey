import React, { useEffect, useState } from "react";
import vanilla from "./vanilla.webp";
import choclate from "./choclate.jpg";
import butter from "./butter.webp";

import "./index.css";
import useUpdateSurvey from "../../hooks/updateSurvey";
import useResults from "../../hooks/useResults";
import Bar from "../../components/Bar";

const QuestionOne = ({ next }) => {
    const results = useResults(1);
    const [data, setData] = useState([
        {
          title:  "vanilla",
          value: 10,
          color: "#65B867 ",
        },
        {
          title:  "chocolate",
          value: 14,
          color: "#F6BD41",
        },
        {
          title:  "butter",
          value: 2,
          color: " #EC5E4F",
        },
        ]);

    const { getUpdatedData } = useUpdateSurvey();
    const [showResults, setshowResults] = useState(false);


    useEffect(() => {
        if (!results) return;
        const rs = Object.keys(results);
        if (rs.length>0) {
            const b = data.map(d => ({ ...d, value: results[d.title] }));
            console.log("rs", b)
        setData([...b]);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [results]);

    console.log('asd', results)
  const updatedResult = (selectedOption) => {
      // surveyResult/1/
      setshowResults(true);
      getUpdatedData(1, selectedOption);
  };
  return (
    <div className="question1">
      <h1 class="header">What's your favourite icecream?</h1>
      <div style={{ display: 'flex' }}>
      </div>

      {showResults && (
          <div style={{ display: 'flex' }}>
            {data.map(d => <Bar text={d.title} result={d.value} color={d.color} />)}
        </div>
      )}
      {next && <button onClick={next}>Next</button>}

      {!showResults && <div class="radiobutton">
        <div class="seperate">
          <button onClick={() => updatedResult('vanilla', 1)}>
            <img class="img" src={vanilla} alt="" />
            <br />
            Vanilla
          </button>
        </div>
        <div class="seperate">
          <button onClick={() => updatedResult('chocolate', 2)}>
            {" "}
            <img class="img" src={choclate} alt="" />
            <br />
            Choclate
          </button>
        </div>
        <div class="seperate">
          <button onClick={() => updatedResult('butter', 3)}>
            <img class="img" src={butter} alt="" />
            <br />
            Butter Scotch
          </button>
        </div>
        <div class="seperate">
          <button onClick={() => updatedResult(4)}>Other</button>
        </div>
      </div>}
    </div>
  );
};

export default QuestionOne;
