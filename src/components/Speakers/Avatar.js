import React from 'react';
import styled from 'styled-components';
import Globals from '../../utils/Globals';
import ytIcon from '../../media/icons/ytIcon.png';

const StyledAvatar = styled.a`
  background-image: url(${({ speaker }) => speaker.avatar});
  background-size: cover;
  background-position: center;
  height: 230px;
  display: block;
  border-radius: 50%;
  filter: grayscale(100%);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: filter 300ms ease;
  border: 5px solid ${Globals.colors.primary};
  cursor: pointer;

  &:hover {
    filter: grayscale(0%);

    > img {
      opacity: 1;
    }
  }

  @media (max-width: 720px) {
    height: 300px;
  }
`;

const YoutubeIcon = styled.img`
  opacity: 0.5;
  height: 80px;
`;

const Avatar = ({ speaker, handleSpeakerClick }) =>
  <StyledAvatar speaker={speaker} onClick={handleSpeakerClick}>
    {!!speaker.videoId && <YoutubeIcon alt="youtube" src={ytIcon} />}
  </StyledAvatar>;

export default Avatar;