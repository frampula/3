import { useState, useEffect } from "react";

const MouseTracker = (props) => {
  const [coordinates, setCoordinates] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    window.addEventListener("mousemove", trackerHandler);

    return () => {
        window.removeEventListener('mousemove', trackerHandler)
    }

  }, []);

  const trackerHandler = (event) => {
    const { clientX, clientY } = event;

    setCoordinates({
      x: clientX,
      y: clientY,
    });
  };

  return (
    <>
      <p>X: {coordinates.x}</p>
      <p>Y: {coordinates.y}</p>
    </>
  );
};

export default MouseTracker;
