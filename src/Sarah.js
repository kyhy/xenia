import React from 'react';
import './index.css';
import styled from '@emotion/styled'
import icon from "./assets/saranya.jpg";
const StyledImg = styled.img`
border-radius: 50%;
height: 250px;
width: 180px;
`;
s
const Parent = styled.div`
    margin: auto;
    text-align:center;
`;
const Sarah = () => (
    <Parent>
                     
        <StyledImg src = {icon} alt=""/>
        <h2>Sara</h2>
        <p>I am a graduate student doing Masters in University Of Dayton.I worked in Multinational company for three years which gained me professional experience  </p>
    </Parent>
);

export default Sarah;
