"use client";

import Mux from "@mux/mux-player-react";

const MuxPlayer = ({ playbackId, title }: { playbackId?: string; title?: string }) => {
  if (!playbackId) return null;

  return (
    <Mux
      playbackId={playbackId}
      metadata={title ? { video_title: title } : undefined}
      streamType="on-demand"
    />
  );
};

export default MuxPlayer;
