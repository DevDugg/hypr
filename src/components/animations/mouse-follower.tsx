"use client";

import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";
import { colors } from "@/config/colors";
import { useAnimationContext } from "@/hooks/use-animation-context";

const MouseFollower = () => {
  const { followerState } = useAnimationContext();
  const isVideo = followerState === "video";
  const isImage = followerState === "image";
  const isDisabled = followerState === "disabled";

  const cursorSize = isImage || isVideo ? 130 : 40;

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
          scaleX: 1 + speed / 100, // Adjust scaling based on speed
          scaleY: 1 - speed / 100, // Adjust scaling based on speed
        }}
        className="fixed rounded-full pointer-events-none z-50 flex items-center justify-center opacity-0 bg-transparent border border-WHITE"
        initial={{
          width: cursorSize,
          height: cursorSize,
          mixBlendMode: "difference",
        }}
        animate={
          isVideo || isImage
            ? {
                width: 161,
                height: 161,
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
            isImage || isVideo
              ? {
                  opacity: 1,
                }
              : {}
          }
        >
          <motion.p
            initial={{ width: cursorSize, height: cursorSize }}
            className="uppercase bg-[#44444421] rounded-full border border-WHITE flex items-center justify-center text-[0.83vw] text-WHITE backdrop-blur-[20px]"
          >
            <AnimatePresence mode="sync" initial={false}>
              {isImage && (
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  see image
                </motion.span>
              )}
              {isVideo && (
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  play video
                </motion.span>
              )}
            </AnimatePresence>
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MouseFollower;
