import React, { useState } from 'react';
import styled from 'styled-components';

// Estilização do contêiner
const Container = styled.div`
  margin-top: 20px;
  padding: 2rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 1.8rem auto; /* Centraliza o contêiner horizontalmente */
  width: 80%; /* Ajusta a largura para caber em telas menores */
`;

// Estilização do título
const Title = styled.h2`
  text-align: center;
  color: #333;
  font-family: 'Versallies', sans-serif; /* Aplica a fonte Versallies */
  margin-bottom: 1rem; /* Espaço abaixo do título */
`;

// Estilização da lista de trabalhos
const List = styled.ul`
  list-style: none;
  padding: 0;
`;

// Estilização de cada item da lista
const ListItem = styled.li`
  background-color: #fff;
  margin: 0.5rem 0;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer; /* Muda o cursor para indicar que é clicável */

  &:hover {
    background-color: #e0e0e0; /* Cor de fundo ao passar o mouse */
    color: #333; /* Cor do texto ao passar o mouse */
  }
`;

// Estilização do card de descrição
const DescriptionCard = styled.div`
  background-color: #f0f0f0;
  padding: 1rem;
  border-radius: 5px;
  margin-top: 1rem;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
`;

const Trabalhos = () => {
  // Lista de trabalhos
  const trabalhos = [
    'Videomaker',
    'Cobertura de Stories',
    'Social Media',
    'Produção de Conteúdo',
    'Filmaker'
  ];

  // Descrições correspondentes
  const descricoes = [
    'Um Videomaker é um profissional que produz vídeos, abrangendo filmagem, edição e pós-produção para transmitir mensagens de forma criativa e impactante.',
    'Cria e compartilha conteúdo em tempo real nas redes sociais, registrando eventos, experiências ou momentos importantes para engajar o público e promover a interação.',
    'Profissional responsável por gerenciar e criar conteúdo para redes sociais, visando aumentar a presença online de uma marca, engajar o público e desenvolver estratégias de comunicação digital.',
    'Cria, edita e distribui materiais informativos e criativos, como textos, vídeos e imagens, para atrair e engajar o público, promovendo a marca ou mensagem de forma eficaz.',
    'Cria filmes, envolvendo atividades como roteiro, direção, produção e edição, para contar histórias por meio do cinema ou vídeo.'
  ];

  // Estado para armazenar a descrição aberta
  const [descricaoAberta, setDescricaoAberta] = useState(null);

  // Função para abrir/fechar a descrição
  const toggleDescricao = (index) => {
    setDescricaoAberta(descricaoAberta === index ? null : index);
  };

  return (
    <Container>
      <Title>Meus Trabalhos</Title>
      <List>
        {trabalhos.map((trabalho, index) => (
          <div key={index}>
            <ListItem onClick={() => toggleDescricao(index)}>
              {trabalho}
            </ListItem>
            {descricaoAberta === index && (
              <DescriptionCard>
                {descricoes[index]}
              </DescriptionCard>
            )}
          </div>
        ))}
      </List>
    </Container>
  );
};

export default Trabalhos;
