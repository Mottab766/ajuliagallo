import React from 'react';
import styled from 'styled-components';
import { FaWhatsapp } from 'react-icons/fa'; // Importa o ícone do WhatsApp

// Estilização do ícone
const IconButton = styled.a`
  position: fixed; /* Fixa o ícone na tela */
  bottom: 20px; /* Distância do fundo */
  right: 20px; /* Distância da direita */
  background-color: #25D366; /* Cor do WhatsApp */
  color: white;
  border-radius: 50%; /* Torna o fundo circular */
  padding: 15px; /* Espaçamento interno */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Sombra para destacar */
  transition: background-color 0.3s;

  &:hover {
    background-color: #128C7E; /* Cor ao passar o mouse */
  }

  @media (max-width: 768px) {
    padding: 10px; /* Ajusta o padding em telas menores */
  }
`;

// Estilização do tooltip
const Tooltip = styled.span`
  visibility: hidden; /* Inicialmente oculto */
  width: 150px; /* Largura do tooltip */
  background-color: #555; /* Cor de fundo do tooltip */
  color: #fff; /* Cor do texto */
  text-align: center; /* Centraliza o texto */
  border-radius: 5px; /* Arredonda os cantos */
  padding: 5px; /* Espaçamento interno */
  position: absolute; /* Posiciona em relação ao ícone */
  bottom: 60px; /* Distância acima do ícone */
  right: 0; /* Alinha à direita do ícone */
  z-index: 1; /* Certifica-se de que fica acima de outros elementos */
  transition: visibility 0.3s, opacity 0.3s linear;
  opacity: 0; /* Inicialmente invisível */
  
  /* Efeito de fade-in */
  ${IconButton}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;

const WhatsappButton2 = ({ numero, mensagem }) => {
  // Gera o link do WhatsApp
  const linkWhatsApp = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  return (
    <div style={{ position: 'relative' }}> {/* Contêiner para o tooltip */}
      <IconButton href={linkWhatsApp} target="_blank" rel="noopener noreferrer">
        <FaWhatsapp size={24} /> {/* Tamanho do ícone */}
      </IconButton>
      <Tooltip>Fale Conosco no WhatsApp</Tooltip> {/* Tooltip */}
    </div>
  );
};

export default WhatsappButton2;
