import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <>
      <div style={{fontSize: "15px"}}>
        <Typewriter
          options={{
            strings: [
              "Cuidadora de perritos",
              "Tamaño mediano/pequeños ",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      </div>
    </>
  );
}

export default Type;
