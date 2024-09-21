"use client";

import {
  Coordinates,
  getRelativeCoordinates,
} from "@/lib/get-relative-coordinates";
import { MouseEvent, useEffect, useMemo, useRef, useState } from "react";

import { useSpring } from "framer-motion";

interface UseMousePosition {
  offsetX?: number;
  offsetY?: number;
}

export const useMousePosition = ({
  offsetX,
  offsetY,
}: UseMousePosition = {}) => {
  const [mousePosition, setMousePosition] = useState<Coordinates>({
    x: 2000,
    y: 0,
    width: 0,
    height: 0,
    centerX: 0,
    centerY: 0,
  });

  const box = useRef<HTMLDivElement>(null);
  const handleMouseMove = (e: MouseEvent) => {
    if (!box.current) return;

    setMousePosition(getRelativeCoordinates(e, box.current, offsetX, offsetY));
  };

  const smoothOptions = useMemo(
    () => ({ damping: 50, stiffness: 150, mass: 0.3 }),
    []
  );

  const smoothMouseX = useSpring(mousePosition.x, smoothOptions);
  const smoothMouseY = useSpring(mousePosition.y, smoothOptions);

  useEffect(() => {
    if (smoothMouseX.get() !== mousePosition.x) {
      smoothMouseX.set(mousePosition.x);
    }
    if (smoothMouseY.get() !== mousePosition.y) {
      smoothMouseY.set(mousePosition.y);
    }
  }, [mousePosition.x, mousePosition.y, smoothMouseX, smoothMouseY]);

  return {
    mousePosition,
    box,
    handleMouseMove,
    smoothMousePosition: { x: smoothMouseX, y: smoothMouseY },
  };
};
