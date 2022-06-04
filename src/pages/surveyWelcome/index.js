import React from "react";

import "./index.css";

const Welcome = ({next}) => {
  return (
    <div className="question welcome">
    {next && <button onClick={next}>Next</button>}
      <h1 class="header">Welcome to GDG Chandigarh</h1>
      <h2>Survey will start in a moment!</h2>

      
    </div>
  );
};

export default Welcome;
