import React, { useEffect, useState } from "react";
import aws from "./aws.jpg";
import azure from "./azure.png";
import google from "./google.png";

import "./index.css";
import useResults from "../../hooks/useResults";
import useUpdateSurvey from "../../hooks/updateSurvey";
import Bar from "../../components/Bar";

const initialData = [
  {
    title: "AWS",
    value: 10,
    color: "#65B867", // green
  },
  {
    title: "Azure",
    value: 14,
    color: "#EC5E4F", // red
  },
  {
    title: "Google",
    value: 2,
    color: " #538FF7", // blue
  },
]

const Survey = ({ next }) => {
  const results = useResults(5);
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
    getUpdatedData(5, selectedOption);
  };
  return (
    <div className="question question3">
      <h1 className="header">Favourite Cloud Solution?</h1>

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
          <img className="img" src={aws} alt="" /><br />Aws
          </button>
        </div>
        <div className="seperate">
          <button onClick={() => updatedResult(initialData[1].title)}>
          <img className="img" src={azure} alt="" /><br />Azure
          </button>
        </div>
        <div className="seperate">
          <button onClick={() => updatedResult(initialData[2].title)}>
          <img className="img" src={google} alt="" /><br />Gpc
          </button>
        </div>
      </div>}
    </div>
  );
};

export default Survey;
