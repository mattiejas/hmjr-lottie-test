import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import "./styles.css";

export default function App() {
  const animEl = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: animEl.current, // the dom element that will contain the animation
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "data.json" // the path to the animation json
    });
  }, []);

  return (
    <div className="App">
      <div style={{ background: "black" }}>
        <div
          id="anim"
          ref={animEl}
          style={{ width: "auto", height: "100vh" }}
        />
      </div>
    </div>
  );
}
