import React, { useState } from "react";

const Age = () => {
  // First i get all Date info and assign it to variables
  const birth = new Date("02/20/1997");
  //I use UseState with already created variable in it.
  const [age, setAge] = useState(
    ((new Date() - birth) / (1000 * 3600 * 24 * 365)).toFixed(8)
  );

  // Then I just start a function with set interval about 2 seconds
  //that will update age every 2 seconds or so.
  //I also convert it to string so that I can split it in HTML
  setInterval(() => {
    setAge(() => {
      let today = new Date();
      return ((today - birth) / (1000 * 3600 * 24 * 365)).toFixed(8).toString();
    });
  }, 2000);

  return (
    <div>
      <h1>
        Hello, my name is Eugene and I am <span> {age.split(".")[0]}</span>
        <span>.{age.split(".")[1]}</span> years old.
      </h1>
    </div>
  );
};

export default Age;
