import { Scrollama, Step } from "react-scrollama";
import React, { useState } from "react";
import "./Scroller.css";

const Scroller = () => {
  const [data, setData] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const steps = [10, 20, 30];
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
    <div className="graphicContainer" style={{ position: "relative" }}>
      <div className="scroller" style={{ position: "relative" }}>
        <Scrollama
          onStepEnter={onStepEnter}
          onStepExit={onStepExit}
          progress
          onStepProgress={onStepProgress}
          offset="400px"
          debug
        >
          {steps.map((value, index) => {
            const isVisible = value === data;
            const background = isVisible
              ? `rgba(44,127,184, ${progress})`
              : "white";
            const visibility = isVisible ? "flex" : "hidden";

            return (
              <Step data={value} key={value}>
                <div className="step" style={{ background }}>
                  <p>step value: {value}</p>
                  <p style={{ display: visibility }}>
                    {Math.round(progress * 1000) / 10 + "%"}
                  </p>
                </div>
              </Step>
            );
          })}
        </Scrollama>
      </div>
      <div
        className="graphic"
        style={{
          flexBasis: "60%",
          position: isSticky ? "sticky" : "static",
          width: "100%",
          height: "600px",
          top: "20vh",
          bottom: "auto",
          backgroundColor: "#aaa",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <p>{data} sweee</p>
      </div>
    </div>
  );
};

export default Scroller;
