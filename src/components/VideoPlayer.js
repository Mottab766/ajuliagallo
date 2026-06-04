import React from 'react';

export default function VideoPlayer({ src, poster, title, vertical = false, autoplay = false, loop = false }) {
  return (
    <div className={`video-player-wrapper ${vertical ? 'vertical' : ''}`}>
      <video
        className="video-player"
        controls
        playsInline
        autoPlay={autoplay}
        muted={autoplay}
        loop={loop}
        preload="metadata"
        poster={poster}
      >
        <source src={src} type={src && src.endsWith('.mov') ? 'video/quicktime' : 'video/mp4'} />
        Seu navegador não suporta vídeo em MP4.
      </video>
      {title && <p className="video-player-title">{title}</p>}
    </div>
  );
}
