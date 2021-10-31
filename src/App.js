import React, { useState, useEffect } from "react";
import Slide from "./Slide";
import data from "./data";

function App() {
  const [people, setPeople] = useState(data);
  

  return (
    <>
      <section className="section">
        <div className="title">
          <h2>
            <span> /</span> Reviews
          </h2>
        </div>
        <div className="section-center">
          <Slide people={people} />
        </div>
      </section>
    </>
  );
}

export default App;
