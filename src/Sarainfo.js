import React from 'react';
import styled from '@emotion/styled';

const StyledImg = styled.img`
  border-radius: 50%;
  height: 250px;
  width: 180px;
`;

const Content = styled.p`
  margin: 0 20%;
`;
const Parent = styled.div`
  margin: auto;
  text-align: center;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
`;
// eslint-disable-next-line arrow-body-style
const Sarainfo = props => {
  return (
    <Parent>
      <StyledImg src={props.info.image} alt="" />
      <h2>{props.info.name}</h2>
      <Content>{props.info.content}</Content>
    </Parent>
  );
};

export default Sarainfo;
