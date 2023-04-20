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
  console.log(Date.now());

  return (
    <div className="App">
      {newArr()
        .reverse()
        .map((date, idx) => {
          return (
            <div key={idx} style={{ border: "1px solid white" }}>
              <h2 style={{ fontSize: "2rem" }}>{date}</h2>
              <div style={{ display: "flex" }}>
                {jobs.jobs.map((job, idx) => {
                  return (
                    <>
                      {getTime(job.time) === date && (
                        <div
                          key={idx}
                          style={
                            job.available
                              ? {
                                  background: "rgba(0,255,0,.05)",
                                  padding: "2em",
                                  textAlign: "left",
                                  border: "1px solid green",
                                  width: "20vw",
                                }
                              : {
                                  background: "rgba(255,0,0,.1)",
                                  padding: "2em",
                                  textAlign: "left",
                                  border: "1px solid red",
                                  width: "20vw",
                                }
                          }
                        >
                          <h2 style={{ fontSize: "1.5rem" }}>{job.org}</h2>
                          <h3>{job.position}</h3>
                          <p style={{ fontWeight: "bold" }}>{job.middleMan}</p>
                          <p>catered: {job.catered}</p>
                          <a href={job.link} target="_blank">
                            {job.link}
                          </a>
                        </div>
                      )}
                    </>
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
