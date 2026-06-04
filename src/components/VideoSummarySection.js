import React from 'react';
import VideoPlayer from './VideoPlayer';

export default function VideoSummarySection() {
  return (
    <section className="video-summary-section">
      <div className="section-content video-summary-grid">
        <div>
          <h2>Vídeo resumo</h2>
          <p>
            Se você pudesse reviver o seu grande dia em 1 minuto e meio, quais seriam os
            momentos mais importantes que gostaria de ver? Qual seria trilha sonora que
            embalaria cada imagem que passa? Assim é construído o seu vídeo resumo, que
            pode ser entregue em até uma semana! Assista ao lado um pouco do sim da Júlia
            e do Lucas.
          </p>
        </div>
        <div>
          <VideoPlayer className="video-sumary-item" src="/videos/Sumary.mp4" poster="" vertical />
        </div>
      </div>
    </section>
  );
}