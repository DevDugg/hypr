"use client";

import { useEffect, useState } from "react";

import ReactPlayer from "react-player";

interface VideoPlayerProps {
  src: string;
  width?: string;
  height?: string;
}

const VideoPlayer = ({ height, src, width }: VideoPlayerProps) => {
  const [hasWindow, setHasWindow] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  return (
    <>
      {hasWindow && (
        <ReactPlayer
          width={width}
          height={height}
          url={src}
          controls={true}
          light={false}
          pip={true}
          style={{ aspectRatio: "16/9" }}
        />
      )}
    </>
  );
};

export default VideoPlayer;
