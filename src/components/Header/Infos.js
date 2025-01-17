import React, { PureComponent } from 'react';
import { css } from 'glamor';

import globals from '../../utils/globals';

const styles = {
  container: css({
    // alignSelf: 'flex-end',
    display: 'flex',
    margin: '0',
    color: globals.colors.white,
    fontSize: 40,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '@media(max-width: 720px)': {
      display: 'flex',
      width: '80%',
      margin: '0 auto',
    },
  }),
  header: css({
    fontSize: 30,
    margin: '0 auto',
  }),
  text: css({
    fontSize: 20,
    margin: '0 auto 4em auto',
  }),
};

class Infos extends PureComponent {
  render() {
    return (
      <div {...styles.container}>
        <p {...styles.header}>{globals.date.full}</p>
        <p {...styles.text}>{globals.location.city}</p>
      </div>
    );
  }
}

export default Infos;
