import React from 'react';

export default function GallerySection() {
  return (
    <section className="gallery-section">
      <video
        className="gallery-bg-video"
        src="/videos/galery.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="gallery-content">
        <h2 className="gallery-title">Sua GALERIA</h2>
        <p className="gallery-text">
          Um espaço exclusivo, organizado com cuidado, onde cada vídeo e cada foto
          encontram seu lugar. A navegação é simples e intuitiva, permitindo reviver o
          dia com leveza e compartilhar com familiares e amigos de forma prática.
        </p>
      </div>
    </section>
  );
}
