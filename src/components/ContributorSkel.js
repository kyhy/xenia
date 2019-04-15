/* eslint-disable react/prop-types */
/* eslint-disable dot-notation */
import React from 'react';
import styled from '@emotion/styled';
import Profilepic from './Profilepic';
import Info from './contributorInfo';

const Right = styled.div`
  float: right;
  margin: auto;
  height: 100%;
  padding: 10px;
  border: solid 3px green;
  text-align: center;
  & > th,
  tr,
  td {
    text-align: left;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  float: left;
  width: 70%;
  margin: auto;
  height: 100%;

  & > * {
    padding: 4px;
    line-height: 140%;
  }

  & > ul,
  li {
    margin: 0 0 13px 0;
  }
  & > .name {
    text-align: center;
    font-weight: bold;
    font-size: 160%;
  }
`;

const ContributorSkel = props => (
  <div>
    <Left>
      <div className="name">{Info[props.value].name}</div>
      <div className="info">{Info[props.value].info()}</div>
    </Left>
    <Right>
      <Profilepic value={Info[props.value].icon} />
      <h2>Basic Info</h2>
      <table>
        <th>
          <tr>Born</tr>
          <tr>Nationality</tr>
          <tr>Education</tr>
          <tr>Occupation</tr>
        </th>
        <td>
          <tr>{Info[props.value].BasicInfo.Born}</tr>
          <tr>{Info[props.value].BasicInfo.Nationality}</tr>
          <tr>{Info[props.value].BasicInfo.Education}</tr>
          <tr>{Info[props.value].BasicInfo.Occupation}</tr>
        </td>
      </table>
    </Right>
  </div>
);

export default ContributorSkel;
