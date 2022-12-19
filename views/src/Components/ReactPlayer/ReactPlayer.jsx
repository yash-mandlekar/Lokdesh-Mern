import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';

export const ReactPlayer = (props) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const { options, onReady } = props;

  useEffect(() => {
    if (!playerRef.current) {
      const videoElement = videoRef.current;
      if (!videoElement) return;
      const player = playerRef.current = videojs(videoElement, options, () => {
        // videojs.log('player is ready');
        onReady && onReady(player);
      });
    } else {
      playerRef.current.src(options.sources);
    }
  }, [options, videoRef]);

  useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <div data-vjs-player >
      <video
        ref={videoRef}
        className={`video-js vjs-big-play-centered ${props.class && props.class}`}
        controls
      />
    </div>
  );
}

export default ReactPlayer;