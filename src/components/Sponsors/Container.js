import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import globals from '../../utils/globals';

const StyledContainer = styled.div`
  background: ${globals.colors.white};
  max-width: 70vw;
  align-items: center;
  padding-top: 20px;

  @media (max-width: 720px) {
    align-self: auto;
    max-width: 100vw;
  }
`;

const Container = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
