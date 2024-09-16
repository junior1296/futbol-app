'use client'

import { useEffect, useRef } from 'react';
import Hls from 'hls.js';

export default function VideoPlayer({src}: {src: string}) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
    const video: HTMLMediaElement = videoRef.current;
    
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(src);
        hls.attachMedia(video);
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        // Para navegadores que soportan HLS nativo
        video.src = src;
      }
    }
  }, [src]);

  return (
    <div>
      <video className='h-screen max-h-screen w-full aspect-video' ref={videoRef} controls autoPlay>
        Tu navegador no soporta HLS.
      </video>
    </div>
  );
}