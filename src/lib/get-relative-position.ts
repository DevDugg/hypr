import { RefObject } from "react";

export const getRelativePosition = (wrapperRef: RefObject<HTMLElement>, elementRef: RefObject<HTMLElement>) => {
  if (!wrapperRef.current || !elementRef.current) return;
  const wrapperRect = wrapperRef.current.getBoundingClientRect();
  const elementRect = elementRef.current.getBoundingClientRect();

  // Calculate the center of the wrapper
  const wrapperCenterX = wrapperRect.left + wrapperRect.width / 2;
  const wrapperCenterY = wrapperRect.top + wrapperRect.height / 2;

  // Calculate the center of the element
  const elementCenterX = elementRect.left + elementRect.width / 2;
  const elementCenterY = elementRect.top + elementRect.height / 2;

  // Calculate the relative position
  const relativeX = elementCenterX - wrapperCenterX;
  const relativeY = elementCenterY - wrapperCenterY;

  return { relativeX, relativeY };
};
