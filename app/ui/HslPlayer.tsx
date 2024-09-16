'use client'

import { useEffect, useRef } from 'react';
import Hls from 'hls.js';

export default function VideoPlayer({src}: {src: string}) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
    const video: HTMLMediaElement = videoRef.current;
    
      if (Hls.isSupported()) {
        //const hls = new Hls();
        const hls = new Hls({
          xhrSetup: (xhr/* , url */) => {
            // Aquí puedes agregar los headers personalizados
            //xhr.setRequestHeader('Authorization', 'Bearer tu_token_aqui');
            xhr.setRequestHeader('Origin', 'https://la10hd.com');
            xhr.setRequestHeader('Referer', 'https://la10hd.com');
          },
        });
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