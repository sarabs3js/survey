import React, { useEffect, useState } from "react";
import instagram from "./instagram.webp";
import twitter from "./twitter.png";
import fb from "./fb.png";

import "./index.css";
import useResults from "../../hooks/useResults";
import Bar from "../../components/Bar";
import useUpdateSurvey from "../../hooks/updateSurvey";

const initialData = [
  {
    title: "Instagram",
    value: 10,
    color: "#65B867 ",
  },
  {
    title: "Twitter",
    value: 14,
    color: "#F6BD41",
  },
  {
    title: "Facebook",
    value: 2,
    color: " #538FF7",
  },
]

const QuestionTwo = ({ next }) => {
  const results = useResults(2);
  const [showResults, setshowResults] = useState(false);
  const { getUpdatedData } = useUpdateSurvey();
  const [data, setData] = useState(initialData);
  useEffect(() => {
    if (!results) return;
    console.log("results", results)
    const rs = Object.keys(results);
    if (rs.length > 0) {
      const b = data.map((d) => ({ ...d, value: results[d.title] }));
      console.log("rs", b);
      setData([...b]);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [results]);
  const updatedResult = (selectedOption) => {
    setshowResults(true);
    getUpdatedData(2, selectedOption);
  };
  return (
    <div className="question2">
      <h1 className="header">What's your favourite Social Media Platform?</h1>

      {showResults && (
        <div style={{ display: "flex" }}>
          {data.map((d) => (
            <Bar key={d.title} text={d.title} result={d.value} color={d.color} />
          ))}
        </div>
      )}
      {next && <button onClick={next}>Next</button>}

      {!showResults && <div className="radiobutton">
        <div className="seperate">
          <button onClick={() => updatedResult(initialData[0].title)}>
            <img className="img" src={instagram} alt="" />
            <br />
            Instagram
          </button>
        </div>
        <div className="seperate">
          <button onClick={() => updatedResult(initialData[1].title)}>
            <img className="img" src={twitter} alt="" />
            <br />
            Twitter
          </button>
        </div>
        <div className="seperate">
          <button onClick={() => updatedResult(initialData[2].title)}>
            <img className="img" src={fb} alt="" />
            <br />
            Facebook
          </button>
        </div>
      </div>}
    </div>
  );
};

export default QuestionTwo;
