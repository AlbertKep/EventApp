import React from "react";

function Home() {
  console.log(process.env.REACT_APP_COLOR);
  return (
    <div>
      <h1>{process.env.REACT_APP_COLOR}</h1>
    </div>
  );
}

export default Home;
