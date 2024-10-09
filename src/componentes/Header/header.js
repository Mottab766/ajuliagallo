import styled from 'styled-components';
import MinhaLogo from '../Header/Logo.png';
import VideoIntro from '../video/video';
import Trabalhos from '../MeusTrabalhos/Trabalhos';
import WhatsappButton from '../BotãoWhatsapp/Botao';
import SobreMim from '../Descricao/SobreMim';

const EstiloCab = styled.div`
  background-color: #d7c2ce;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center; /* Centraliza os itens horizontalmente */
  padding: 1rem; /* Adiciona um espaçamento interno */
`;

const DivLogo = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem; /* Espaçamento entre o logo e o vídeo */
`;

const EstiloLogo = styled.img`
  max-width: 23rem;
  width: 100%; /* Faz com que a imagem ocupe 100% do espaço disponível */
  height: auto; /* Mantém a proporção da imagem */
`;


const Cabecalho = () => {
  return (
    <EstiloCab className="cabecalho">
      <DivLogo>
        <EstiloLogo src={MinhaLogo} alt="Logo" />
      </DivLogo>
      <VideoIntro />
      <SobreMim />
      <Trabalhos />
      <WhatsappButton 
        numero="21968707701" // Substitua pelo número desejado
        mensagem="Olá, gostaria de mais informações sobre os seus serviços!" // Mensagem pré-definida
      />
    </EstiloCab>
  );
};

export default Cabecalho;
