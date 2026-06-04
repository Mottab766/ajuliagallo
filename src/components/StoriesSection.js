import React, { useEffect, useRef } from 'react';
import VideoPlayer from './VideoPlayer';

export default function StoriesSection() {
  const vids = [
    'https://res.cloudinary.com/dawfy6ocd/video/upload/v1780611088/story1_ntcnxx.mp4',
    'https://res.cloudinary.com/dawfy6ocd/video/upload/v1780611516/story2_yxpyl1.mp4',
    'https://res.cloudinary.com/dawfy6ocd/video/upload/v1780611090/story3_izfmmi.mp4',
  ];

  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const second = container.children[1];
    if (second) {
      second.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'instant' });
    }
  }, []);

  return (
    <section className="stories-section">
      <div className="section-content">
        <h2>Assim serão seus stories</h2>
        <p>
          Nos stories, a proposta não é apenas reunir melhores momentos, mas construir
          uma narrativa do dia. Com vídeos já editados e também com aqueles trechos que
          merecem ser revistos na íntegra, sem cortes. Complementando, fotos que traduzem
          a atmosfera do dia.
        </p>

        <div className="stories-videos" aria-label="Stories videos" ref={containerRef}>
          {vids.map((src, i) => (
            <div key={i} className="stories-video-item">
              <VideoPlayer src={src} poster="" vertical autoplay loop />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
