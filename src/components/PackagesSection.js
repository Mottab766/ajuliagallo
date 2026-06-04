import React from 'react';

const packages = [
  {
    name: 'VERSO',
    description:
      'O começo da narrativa. Sensível, direto e essencial. Pensado para casais que desejam registrar o dia de forma mais intimista, priorizando os momentos da cerimônia. Nessa opção você tem: Captação durante a Cerimônia; Cobertura de stories em tempo real; Quantidade de stories ilimitada; Vídeo Resumo de até 1 minuto e meio; Galeria personalizada com os registros.',
    price: 'R$500,00',
    bg: '#edeced',
    color: '#212121',
    image: '/videos/verso.jpg',
    imageLeft: true,
  },
  {
    name: 'POEMA',
    description:
      'Mais camadas. Mais profundidade. Mais tempo para sentir. Pensado para casais que desejam ampliar a narrativa, permitindo que o dia seja contado com mais detalhes. Nessa opção você tem: Captação durante a Cerimônia; Captação durante a recepção/festa; Cobertura de stories em tempo real; Quantidade de stories ilimitada; Vídeo Resumo de até 1 minuto e meio; Galeria personalizada com os registros.',
    price: 'R$820,00',
    bg: '#d4d4d4',
    color: '#212121',
    image: '/videos/poema.jpg',
    imageLeft: false,
  },
  {
    name: 'OBRA',
    description:
      'A história em sua forma completa. Pensada para quem valoriza cada detalhe, cada etapa e deseja que os stories documentem com amplitude e intenção. Nessa opção você tem: Captação durante o Making off; Captação durante a Cerimônia; Captação durante a Recepção/Festa; Cobertura de stories em tempo real; Quantidade de stories ilimitada; Vídeo Resumo de até 1 minuto e meio; Galeria personalizada com os registros.',
    price: 'R$1.150,00',
    bg: '#151313',
    color: '#ffffff',
    image: '/videos/obra.jpg',
    imageLeft: true,
  },
];

export default function PackagesSection() {
  return (
    <section className="packages-section">
      <div className="section-content">
        <h2>Investimentos</h2>
        <div className="package-grid">
          {packages.map((pkg) => (
            <article
              className={`package-card ${pkg.name === 'OBRA' ? 'package-card--dark' : ''}`}
              key={pkg.name}
              style={{ background: pkg.bg, color: pkg.color }}
            >
              <div className={`package-inner ${pkg.imageLeft ? 'image-left' : 'image-right'}`}>
                <div className="package-body">
                  <h3>{pkg.name}</h3>
                  <p>{pkg.description}</p>
                  <div className="package-price">
                    <span style={{ color: pkg.color }}>Investimento</span>
                    <strong style={{ color: pkg.color }}>{pkg.price}</strong>
                  </div>
                </div>
                <img src={pkg.image} alt={pkg.name} className="package-image" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
