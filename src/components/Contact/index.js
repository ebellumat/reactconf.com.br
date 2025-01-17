import React from 'react';
import styled from 'styled-components';

import { Title, SubTitle } from '../Title';
import globals from '../../utils/globals';

import Slack from './Slack';
import Github from './Github';
import Facebook from './Facebook';
import Twitter from './Twitter';

const Container = styled.div`
  background-color: ${globals.colors.white};
  width: 100%;
  text-align: center;
`;

const Link = styled.a`
  color: ${globals.colors.primary};
`;

const Contact = () => (
  <Container>
    <Title title="Contato" />
    <SubTitle title="Acesse nossas redes" />

    <div>
      <Slack />
      <Twitter />
      <Github />
      <Facebook />

      <p>
        Envie sua
        {' '}
        <i lang="en" className="notranslate">
          Pull Request
        </i>
        . Ajude a manter esta página:
        <br />
        <Link
          target="_blank"
          href={globals.contacts.repo}
          rel="noopener noreferrer"
        >
          {globals.contacts.repo}
        </Link>
      </p>
      <p>
        E-mail:
        <br />
        <Link
          href={`mailto:${globals.contacts.email}`}
          rel="noopener noreferrer"
        >
          {globals.contacts.email}
        </Link>
      </p>
    </div>
  </Container>
);

export default Contact;
