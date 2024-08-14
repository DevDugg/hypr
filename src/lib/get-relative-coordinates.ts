import { MouseEvent } from "react";

export interface Coordinates {
  x: number;
  y: number;
  width: number;
  height: number;
  centerX: number;
  centerY: number;
}

export function getRelativeCoordinates(
  event: MouseEvent,
  referenceElement: HTMLElement,
  offsetX: number = 0,
  offsetY: number = 0,
): Coordinates {
  const position = {
    x: event.pageX,
    y: event.pageY,
  };

  const offset = {
    left: referenceElement.offsetLeft,
    top: referenceElement.offsetTop,
    width: referenceElement.clientWidth,
    height: referenceElement.clientHeight,
  };

  let reference = referenceElement.offsetParent as HTMLElement | null;

  while (reference) {
    offset.left += reference.offsetLeft;
    offset.top += reference.offsetTop;
    reference = reference.offsetParent as HTMLElement | null;
  }

  return {
    x: position.x - offset.left + offsetX,
    y: position.y - offset.top + offsetY,
    width: offset.width,
    height: offset.height,
    centerX: (position.x - offset.left - offset.width / 2) / (offset.width / 2),
    centerY: (position.y - offset.top - offset.height / 2) / (offset.height / 2),
  };
}
