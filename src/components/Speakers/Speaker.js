import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Avatar from './Avatar';
import Name from './Name';
import WorksIn from './WorksIn';
import Theme from './Theme';
import Globals from '../../utils/Globals';

const StyledSpeaker = styled.div`
  width: 230px;
  max-width: 100%;
  padding: 0;
  background-color: ${Globals.colors.transparent};
  border-radius: 0;
  margin: 10px 10px 4em;
`;

const Speaker = ({ speaker, handleSpeakerClick }) =>
  <StyledSpeaker>
    <Avatar speaker={speaker} handleSpeakerClick={handleSpeakerClick} />
    <Name name={speaker.name} github={speaker.github} />
    <WorksIn name={speaker.worksIn} link={speaker.worksLink} />
    <Theme theme={speaker.theme} talk={!!speaker.talk ? speaker.talk : ''} />
  </StyledSpeaker>;

Speaker.propTypes = {
  speaker: PropTypes.object.isRequired,
  handleSpeakerClick: PropTypes.func.isRequired,
};

export default Speaker;
