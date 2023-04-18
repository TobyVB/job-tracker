import { useState } from "react";
import jobs from "../data.js";
import "./App.css";

function App() {
  function getTime(date) {
    const time = new Date(date);
    return time.toLocaleDateString();
  }

  function newArr() {
    const newArr = [];
    jobs.jobs.map((job, idx) => {
      !newArr.includes(getTime(job.time)) && newArr.push(getTime(job.time));
    });
    return newArr;
  }
  console.log(newArr());

  return (
    <div className="App">
      {newArr().map((date, idx) => {
        return (
          <div key={idx} style={{ border: "1px solid white" }}>
            <h2 style={{ fontSize: "2rem" }}>{date}</h2>
            <div>
              {jobs.jobs.map((job, idx) => {
                getTime(job.time) === getTime(date.time);
                return (
                  <div key={idx} style={{ textAlign: "left", padding: "2em" }}>
                    <h2 style={{ fontSize: "1.5rem" }}>{job.org}</h2>
                    <h3>{job.position}</h3>
                    <p style={{ fontWeight: "bold" }}>{job.middleMan}</p>
                    <p>catered: {job.catered}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
