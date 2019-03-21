import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const Perimeter = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

const StyledLink = styled(Link)`
padding: 1rem`;

export default function Nav() {
  return (
    <Perimeter>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/contributors">Contributors</StyledLink>
    </Perimeter>
  );
}
