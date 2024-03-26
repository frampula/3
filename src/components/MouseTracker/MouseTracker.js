import { useState, useEffect } from "react";

const MouseTracker = (props) => {
  const [coordinates, setCoordinates] = useState({
    x: 0,
    y: 0,
  });

  const [counter, setCounter] = useState(0)

  useEffect(() => {
    window.addEventListener("mousemove", trackerHandler);

    return () => {
      window.removeEventListener("mousemove", trackerHandler);
    };
  }, []);

  const trackerHandler = (event) => {
    const { clientX, clientY } = event;

    setCoordinates({
        x: clientX,
        y: clientY
    });
  };

  const clickHandler = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <p>X: {coordinates.x}</p>
      <p>Y: {coordinates.y}</p>
      <button onClick={clickHandler}>Click me</button>
      <p>Counter: {counter}</p>
    </>
  );
};

export default MouseTracker;
