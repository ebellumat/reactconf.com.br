import React, { PureComponent } from 'react';
import { css } from 'glamor';
import globals from '../utils/globals';

import Text from './Text';

import infoQ from '../media/images/sponsors/infoqbrasil.png';

const styles = {
  container: css({
    background: globals.colors.white,
    width: '100vw',
    alignItems: 'center',
    '@media(max-width: 720px)': {
      alignSelf: 'auto',
    },
  }),
  link: css({
    color: '#666666',
  }),
  card: css({
    width: 200,
    height: 75,
    '@media(min-width: 721px)': {
      '> .secondary': {
        height: 100,
      },
      height: 150,
    },
    padding: '0',
    backgroundColor: globals.colors.white,
    borderRadius: 0,
    margin: 10,
    position: 'relative',
    '> a > img': {
      '.secondary': {
        maxWidth: 120,
        maxHeight: 60,
      },
      maxWidth: 150,
      maxHeight: 75,
      margin: '0 auto',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
  }),
  cards: css({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    width: '100%',
    maxWidth: 1000,
    margin: '30px auto',
  }),
};

const Supporters = [
  {
    id: 13,
    name: 'InfoQ',
    avatar: infoQ,
    link: 'https://www.infoq.com/',
  },
];

const SecondarySupporters = [];

class TextSupporters extends PureComponent {
  render() {
    return (
      <div {...styles.container}>
        <Text title="Apoio" reverse />

        <div {...styles.cards}>
          {Supporters.map(sponsor => (
            <div key={sponsor.id} {...styles.card}>
              <a
                href={`${
                  sponsor.link
                }?utm_source=reactconfbr-site&utm_medium=logo&utm_campaign=reactconfbr-2017`}
                title={sponsor.name}
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={sponsor.avatar} alt={sponsor.name} />
              </a>
            </div>
          ))}
        </div>

        {SecondarySupporters && (
          <div {...styles.cards}>
            {SecondarySupporters.map(secondarySponsor => (
              <div key={secondarySponsor.id} {...styles.card}>
                <a
                  href={`${
                    secondarySponsor.link
                  }?utm_source=reactconfbr-site&utm_medium=logo&utm_campaign=reactconfbr-2017`}
                  title={secondarySponsor.name}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    src={secondarySponsor.avatar}
                    alt={secondarySponsor.name}
                    className="secondary"
                  />
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default TextSupporters;
