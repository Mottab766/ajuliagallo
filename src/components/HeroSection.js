import React from 'react';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-video-wrapper">
        <video
          className="hero-video"
          src="https://res.cloudinary.com/dawfy6ocd/video/upload/v1780611069/Footer_wtf95r.mp4"
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
        />
        <div className="hero-overlay">
          <p className="eyebrow">Assim que contamos sua história!</p>
          <h1>ajuliagallo</h1>
        </div>
      </div>
      <div className="hero-image-wrapper">
        <img className="hero-section-image" src="/videos/IMG_1.JPG" alt="" />
      </div>
      <div className="section-content hero-text">
        <p>
          Cada amor tem sua própria linguagem. E é nessa linguagem que eu me inspiro
          para criar algo que não seja apenas bonito, mas profundamente verdadeiro.
          No fim, o que permanece na memória não é apenas a estética do dia, mas a
          emoção que ele carrega. E é assim que contamos a sua história!
        </p>
      </div>

    </section>
  );
}
