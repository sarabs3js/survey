import React, { useEffect, useState } from "react";
import windows from "./windows.png";
import linux from "./linux.png";
import apple from "./apple.webp";

import "./index.css";
import useResults from "../../hooks/useResults";
import useUpdateSurvey from "../../hooks/updateSurvey";
import Bar from "../../components/Bar";

const initialData = [
  {
    title: "Windows",
    value: 10,
    color: "#65B867", // green
  },
  {
    title: "Linux",
    value: 14,
    color: "#EC5E4F", // red
  },
  {
    title: "mac",
    value: 2,
    color: " #538FF7", // blue
  },
]

const Survey = ({ next }) => {
  const results = useResults(4);
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
    getUpdatedData(4, selectedOption);
  };
  return (
    <div className="question question3">
      <h1 className="header">Favourite Operating System?</h1>

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
          <img  className="img" src={windows} alt="" /><br />Windows
          </button>
        </div>
        <div className="seperate">
          <button onClick={() => updatedResult(initialData[1].title)}>
          <img  className="img" src={linux} alt="" /><br />Linux
          </button>
        </div>
        <div className="seperate">
          <button onClick={() => updatedResult(initialData[2].title)}>
          <img  className="img" src={apple} alt="" /><br />Mac
          </button>
        </div>
      </div>}
    </div>
  );
};

export default Survey;
