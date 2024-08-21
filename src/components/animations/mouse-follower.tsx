"use client";

import {
  AnimatePresence,
  MotionConfig,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";
import { useAnimationContext } from "@/hooks/use-animation-context";

const MouseFollower = () => {
  const { followerState } = useAnimationContext();
  const isActive = followerState !== "default" && followerState !== "disabled";
  const isDisabled = followerState === "disabled";

  const cursorSize = isActive ? 130 : 40;

  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 50, stiffness: 200, mass: 0.3 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const ref = useRef<HTMLDivElement>(null);

  const [speed, setSpeed] = useState(0);
  const lastMousePosition = useRef({ x: 0, y: 0 });
  const lastTime = useRef(Date.now());

  useEffect(() => {
    const manageMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      const deltaX = clientX - lastMousePosition.current.x;
      const deltaY = clientY - lastMousePosition.current.y;

      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const timeNow = Date.now();
      const deltaTime = timeNow - lastTime.current;

      // Speed calculation
      const newSpeed = distance / deltaTime;

      setSpeed(newSpeed);

      lastMousePosition.current = { x: clientX, y: clientY };
      lastTime.current = timeNow;

      mouse.x.set(clientX - cursorSize / 2);
      mouse.y.set(clientY - cursorSize / 2);

      if (ref.current) {
        ref.current.style.opacity = "1";
      }
    };

    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, [mouse.x, mouse.y, cursorSize]);

  return (
    <div className="max-md:hidden">
      <motion.div
        ref={ref}
        style={{
          left: smoothMouse.x,
          top: smoothMouse.y,
          scaleX: 1 + speed / 40, // Adjust scaling based on speed
          scaleY: 1 - speed / 40, // Adjust scaling based on speed
        }}
        className="fixed rounded-full uppercase bg-[#44444421] pointer-events-none z-50 flex items-center justify-center opacity-0 border border-WHITE backdrop-blur-[20px] text-WHITE"
        initial={{
          width: cursorSize,
          height: cursorSize,
          mixBlendMode: "difference",
        }}
        animate={
          isActive
            ? {
                width: 130,
                height: 130,
                mixBlendMode: "normal",
              }
            : isDisabled
            ? {
                opacity: 0,
              }
            : {}
        }
      >
        <motion.div
          className={cn(`size-[${cursorSize}px]`)}
          initial={{ opacity: 0 }}
          animate={
            isActive
              ? {
                  opacity: 1,
                }
              : {}
          }
        >
          {followerState === "open" ? (
            <motion.span
              className="inline-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              open
            </motion.span>
          ) : followerState === "play" ? (
            <motion.span
              key={"play"}
              className="inline-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              play
            </motion.span>
          ) : followerState === "drag" ? (
            <motion.span
              key={"drag"}
              className="inline-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              drag
            </motion.span>
          ) : null}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MouseFollower;
