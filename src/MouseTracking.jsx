import React, { useState } from "react";
import tank from "./tank.png";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Carousel from "./carousel";
import artistData from "./artistList";

const MouseTracking = (children) => {
  const x = useMotionValue(90);
  const xRange = [0, 90, 180, 270, 360]; //<-- InputRange
  const xInterpolate = [270, 180, 90, 0, -90]; //<-- OutputRange
  const rotateTo = useTransform(x, xRange, xInterpolate);
  const [tableToImagePosition, setTableToImagePosition] = useState(0);
  const [rotations, setRotations] = useState(0);

  const handleMouse = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const { left, top, width, height } = rect;
    const center = { x: left + width / 2, y: top + height / 2 };
    const radian = Math.atan2(
      event.clientY - center.y,
      event.clientX - center.x
    );
    const degree = radian * (180 / Math.PI) * -1 + 180;
    x.set(degree);
    setTableToImagePosition(Math.round(degree));
  };
  return (
    <>
      <Carousel artistData={artistData} position={tableToImagePosition} />
      <motion.div className="tankContainer" onMouseMove={handleMouse}>
        <motion.img
          className="tank"
          src={tank}
          alt=""
          style={{ rotate: rotateTo }}
        />
      </motion.div>
    </>
  );
};

export default MouseTracking;
