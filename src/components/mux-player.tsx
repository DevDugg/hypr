"use client";

import Mux from "@mux/mux-player-react";
import muxBlurHash from "@mux/blurhash";

const MuxPlayer = ({ playbackId, title }: { playbackId?: string; title?: string }) => {
  if (!playbackId) return null;

  // const { blurHashBase64, sourceWidth, sourceHeight } = await muxBlurHash(playbackId);

  return (
    <Mux
      // placeholder={playbackId}
      // style={{ aspectRatio: sourceWidth / sourceHeight }}
      playbackId={playbackId}
      metadata={title ? { video_title: title } : undefined}
      streamType="on-demand"
    />
  );
};

export default MuxPlayer;
