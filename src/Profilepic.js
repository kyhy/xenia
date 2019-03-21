import React from 'react';
import styled from '@emotion/styled';

const StyledImg = styled.img`
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px;
    height: 400px;
    width: 300px;
`;

const Profilepic = (props) => (
    <div>
        <StyledImg className="icon" src={props.value} alt="icon" />
    </div>
);

export default Profilepic;
