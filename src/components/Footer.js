import React, { PureComponent } from 'react';
import { css, before } from 'glamor';
import globals from '../utils/globals';

import Item from './Item';

const styles = {
  container: css({
    background: globals.colors.primary,
    color: globals.colors.white,
    width: '100%',
    flexDirection: 'column',
    '@media(min-width: 720px)': {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }),

  wrapper: css({
    width: '80%',
    maxWidth: 1000,
    display: 'flex',
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
    '@media(min-width: 720px)': {
      width: '100%',
      justifyContent: 'space-between',
      display: 'flex',
      flexDirection: 'row',
    },
  }),

  link: css({
    color: globals.colors.secondary,
    textDecoration: 'none',
  }),

  before: before({
    content: '""',
    position: 'absolute',
    left: '0',
    bottom: '100%',
    height: '0',
    width: '0',
  }),
};

class Footer extends PureComponent {
  render() {
    return (
      <div {...styles.container} {...styles.before}>
        <div {...styles.wrapper}>
          <Item title="#REACTCONFBR" subtitle="REACT BRASIL">
            <div id="google_translate_element" />
          </Item>
          <Item title="COMPROMISSO">
            <p>
              <a
                {...styles.link}
                href="https://github.com/nic/reactconf.com.br/raw/master/public/files/React_ManualConduta.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Código de Conduta
              </a>
            </p>
          </Item>
          <Item>
            <p className="notranslate">
              Branding:
              {' '}
              <a {...styles.link} href="https://informatica.sp.senai.br">
                SENAI
              </a>
            </p>
            <p>
              Criado com:
              {' '}
              <a
                {...styles.link}
                href="https://github.com/facebookincubator/create-react-app/"
                className="notranslate"
              >
                create-react-app
              </a>
            </p>
            <p>
              {' '}
              <a
                {...styles.link}
                href="https://facebook.github.io/react/community/conferences.html"
                className="notranslate"
              >
                Conferences React
              </a>
            </p>
          </Item>
        </div>
      </div>
    );
  }
}

export default Footer;
