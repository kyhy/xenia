/* eslint-disable max-len */
import React from 'react';
import './index.css';
import styled from '@emotion/styled';
import icon from './assets/saranya.jpg';

const StyledImg = styled.img`
  border-radius: 50%;
  height: 250px;
  width: 180px;
`;

const Parent = styled.div`
  margin: auto;
  text-align: center;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
`;
const Sarah = () => (
  <Parent>
    <h1>Welcome to my pag</h1>
    <StyledImg src={icon} alt="" />
    <h2>Saranya</h2>
    <p>
      A dreamer,learner and coder doing Masters in University Of Dayton.Worked
      as Systen Engineer for three years with application
      development,deployment,administration as VB.Net and Java developer.I love
      learning new skills and glad to upgrade myself now and then.I always make
      an extra step I whatever I do{' '}
    </p>
  </Parent>
);

export default Sarah;
