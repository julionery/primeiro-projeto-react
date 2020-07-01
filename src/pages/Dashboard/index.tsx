import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no GitHub</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/15279868?s=460&u=cea0e3bd83ae804a2e40a479b94b7eb7d585fd16&v=4"
            alt="Júlio Nery"
          />
          <div>
            <strong>julionery/rocketseat-nlw</strong>
            <p>
              ♻ Ecoleta: marketplace de coleta de resíduos. Ajudamos pessoas a
              entrarem pontos de coleta de forma eficiente. #react #nodejs
              #react-native
            </p>
          </div>

          <FiChevronRight size={40} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
