import React from "react";
import styled from "styled-components";

// Estilização do contêiner principal
const Container = styled.div`
  background-color: #fff;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: "Versallies", sans-serif; /* Aplica a fonte Versallies */
  color: #3b2740; /* Cor do texto */
`;

// Estilização do título
const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center; /* Centraliza o título */
`;

// Estilização do texto da descrição
const Description = styled.p`
  font-size: 1rem;
  line-height: 2;
  text-align: justify; /* Justifica o texto */
`;

const SobreMim = () => {
  return (
    <Container>
      <Title>Quem sou eu?</Title>
      <Description>
        Olá! Sou uma mulher apaixonada por mídias sociais e tudo que envolve o mundo digital. <br/> Trabalho na área de marketing digital, onde ajudo       empresas a se conectarem com seu público através de estratégias criativas e inovadoras.<br/> Adoro criar conteúdo envolvente, explorar novas        tendências e interagir com pessoas incríveis. <br/>Meu objetivo é sempre
        proporcionar uma experiência única e autêntica para cada seguidor,
        transformando a presença online em algo significativo e impactante.<br/>
       <strong> Vamos juntos nessa jornada pelas redes sociais!</strong>
      </Description>
    </Container>
  );
};

export default SobreMim;
