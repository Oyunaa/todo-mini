import React, { useState } from "react";

export default function List({ data }) {
  return (
    <div>
      {data.map((e) => (
        <div>{e}</div>
      ))}
    </div>
  );
}
