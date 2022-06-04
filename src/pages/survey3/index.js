import React, { useEffect, useState } from "react";
import angular from "./angular.png";
import react from "./React.png";
import vue from "./vue.png";

import "./index.css";
import useResults from "../../hooks/useResults";
import useUpdateSurvey from "../../hooks/updateSurvey";
import Bar from "../../components/Bar";

const initialData = [
  {
    title: "Angular",
    value: 10,
    color: "#65B867 ", // green
  },
  {
    title: "React",
    value: 14,
    color: "#EC5E4F", // red
  },
  {
    title: "Vue",
    value: 2,
    color: " #538FF7", // blue
  },
]

const Survey = ({ next }) => {
  const results = useResults(3);
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
    getUpdatedData(3, selectedOption);
  };
  return (
    <div className="question question3">
      <h1 className="header">Favourite Javascript framework/library?</h1>

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
          <img  className="img" src={angular} alt="" /><br />Angular
          </button>
        </div>
        <div className="seperate">
          <button onClick={() => updatedResult(initialData[1].title)}>
          <img  className="img" src={react} alt="" /><br />React
          </button>
        </div>
        <div className="seperate">
          <button onClick={() => updatedResult(initialData[2].title)}>
          <img  className="img" src={vue} alt="" /><br />Vue
          </button>
        </div>
      </div>}
    </div>
  );
};

export default Survey;
