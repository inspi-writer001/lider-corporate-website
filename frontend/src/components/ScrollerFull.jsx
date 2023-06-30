import { Scrollama, Step } from "react-scrollama";
import React, { useState } from "react";
import "./ScrollerFull.css";

const Scroller = ({ Headers, BodyContent, carList, steps }) => {
  const [data, setData] = useState(0);
  const [isSticky, setIsSticky] = useState(false);

  const [progress, setProgress] = useState(0);
  const [tracker, setTracker] = useState(0);

  const onStepEnter = (e) => {
    const { data, entry, direction } = e;
    setData(data);

    console.log(Math.round(progress * 1000) / 10);
    // if(progress)
  };

  const onStepExit = ({ direction, data }) => {
    if (direction === "up" && data === steps[0]) {
      setData(0);
      console.log("0 out");
    }
  };

  const onStepProgress = ({ progress }) => {
    setProgress(progress);
    console.log(progress);
    if (progress >= 0.5 && progress < 0.6) {
      console.log("whooo");
      setIsSticky(true);
    }
  };

  return (
    <div className="graphicContainers" style={{ position: "relative" }}>
      <div className="scrollers" style={{ position: "relative" }}>
        <Scrollama
          onStepEnter={onStepEnter}
          onStepExit={onStepExit}
          progress
          onStepProgress={onStepProgress}
          offset="400px"
          // debug
        >
          {steps.map((value, index) => {
            const isVisible = value === data;
            const background = isVisible
              ? `rgba(44,127,184, ${progress})`
              : "rgba(44,127,184, 0.02)";
            const visibility = isVisible ? "flex" : "hidden";

            return (
              <Step data={value} key={value}>
                <div className="steps" style={{ background }}>
                  <h4 style={{ textAlign: "center" }}>{Headers[index]}</h4>
                  <p style={{ display: visibility, fontSize: ".7rem" }}>
                    {BodyContent[index]}
                  </p>
                </div>
              </Step>
            );
          })}
        </Scrollama>
      </div>

      <div
        className="graphics"
        style={{
          flexBasis: "60%",
          position: isSticky ? "sticky" : "static",
          width: "100%",
          height: "100%",
          top: "20vh",
          bottom: "auto",
          backgroundColor: "#aaa",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <img
          src={
            data == 10
              ? carList[0]
              : data == 20
              ? carList[1]
              : data == 30
              ? carList[2]
              : data == 40
              ? carList[0]
              : carList[0]
          }
        />
      </div>
    </div>
  );
};

export default Scroller;
