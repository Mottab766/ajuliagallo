import React from 'react';

export default function AboutSection() {
  return (
    <section className="about-section">
      <h2 className="about-heading">Sobre mim</h2>
      <div className="about-grid">
        <div className="about-image-wrapper">
          <img src="/videos/julia.jpg" alt="Julia" className="about-image" />
        </div>
        <div className="about-text">
          <h2 className="about-heading-desktop">Sobre mim</h2>
          <p>
            Como especialista em storymaker do ramo de casamentos, conto cada história a
            partir da essência do casal, respeitando ritmo, verdade e singularidade.
            O trabalho nasce do encontro entre técnica, sensibilidade e intenção.
          </p>
        </div>
      </div>
    </section>
  );
}
