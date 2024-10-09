import React from 'react';
import styled from 'styled-components';

// Estilização do botão
const Button = styled.a`
  padding: 1rem 2rem;
  background-color: #25D366; /* Cor do WhatsApp */
  color: white;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  font-size: 1rem;
  font-family: 'Versallies', sans-serif; /* Aplica a fonte Versallies */
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #128C7E; /* Cor do botão ao passar o mouse */
  }
`;

const WhatsappButton = ({ numero, mensagem }) => {
  // Gera o link do WhatsApp
  const linkWhatsApp = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  return (
    <Button href={linkWhatsApp} target="_blank" rel="noopener noreferrer">
      Fale Conosco no WhatsApp
    </Button>
  );
};

export default WhatsappButton;
