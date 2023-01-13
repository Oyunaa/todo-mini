import React, { useState } from "react";

const Hand = () => {
  const [color, setColor] = useState("red");
  const handleScroll = (event) => {
    // console.log("scrollTop: ", event.currentTarget.scrollTop);
    // console.log("offsetHeight: ", event.currentTarget.offsetHeight);

    if (event.currentTarget.scrollTop > 150) {
      setColor("orange");
    } else {
      setColor("red");
    }
  };

  return (
    <div
      style={{
        border: "3px solid black",
        width: "400px",
        height: "100px",
        overflow: "scroll",
        backgroundColor: color,
      }}
      onScroll={handleScroll}
    >
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
      <p>Content</p>
    </div>
  );
};

export default Hand;
