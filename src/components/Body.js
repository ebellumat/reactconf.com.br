import React from 'react';
import styled from 'styled-components';
import globals from '../utils/globals';

import Event from './Event';
import Venue from './Venue';
import Park from './Park';
import Speakers from './Speakers';
import Schedule from './Schedule';
// import C4P from './C4P';
import Sponsors from './Sponsors';
import Supporters from './Supporters';
// import Promotions from './Promotions';
import BuyTickets from './BuyTickets';
import Contact from './Contact';
import Meetups from './Meetups';
// import AfterParty from './AfterParty';
import BeSponsor from './BeSponsor';

const Container = styled.div`
  display: flex;
  background: ${globals.colors.white};
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

const App = () => (
  <Container>
    <Event />
    <Venue />
    <Speakers />
    <Schedule />
    <Park />
    <BuyTickets />
    {/* <Promotions />
    <AfterParty /> */}
    <Sponsors />
    <Supporters />
    <BeSponsor />
    <Meetups />
    {/* <C4P /> */}
    <Contact />
  </Container>
);

export default App;
