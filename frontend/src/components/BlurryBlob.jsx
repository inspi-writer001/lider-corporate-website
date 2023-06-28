import React from "react";
import blur from "../assets/bbblurry.svg";

const BlurryBlob = ({ height, style, z }) => {
  return (
    <div style={{ ...style, zIndex: z }}>
      <img
        src={blur}
        alt="blurr bolb"
        style={{ width: height + "rem", opacity: ".5", zIndex: z }}
      />
    </div>
  );
};

export default BlurryBlob;
