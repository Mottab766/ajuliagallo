import styled from 'styled-components';

// Estilização do contêiner do vídeo
const DivVideo = styled.div`
  display: flex;
  justify-content: center;
  background-color: #d7c2ce; /* Fundo do contêiner */
  width: 100%; /* Largura total do contêiner */
  height: 0; /* Altura inicial como 0 para usar padding-bottom */
  padding-bottom: 56.25%; /* Mantém a proporção 16:9 (altura: largura) */
  position: relative; /* Para usar o iframe absoluto */
  margin-bottom: 1rem;
`;

// Estilização do iframe
const IFrameStyled = styled.iframe`
  width: 100%; /* Largura responsiva */
  height: 100%; /* Altura responsiva */
  border: none; /* Remove bordas do iframe */
  position: absolute; /* Posiciona o iframe em relação ao contêiner */
  top: 0;
  left: 0;
`;

const VideoIntro = () => {
  return (
    <DivVideo>
      <IFrameStyled
        src="https://player.vimeo.com/video/1017736465?autoplay=1" // Link de incorporação correto do Vimeo
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </DivVideo>
  );
};

export default VideoIntro;
