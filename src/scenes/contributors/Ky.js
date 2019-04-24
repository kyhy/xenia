import React from 'react';
/* eslint-disable dot-notation */
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import ContributorSkel from '../../components/ContributorSkel';
import ProfilePic from '../../components/Profilepic';
import kyPic from '../../assets/contributor_info/images/Ky.jpg';

const Perimeter = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1em;
`;

const Left = styled.div``;

const Right = styled.div``;

const Name = styled.div`
  font-weight: bold;
  font-size: 1.6rem;
  margin-bottom: 1em;
`;

const Info = styled.div``;

const BasicInfo = props => (
  <div>
    <div>{props.born}</div>
    <div>{props.nationality}</div>
    <div>{props.education}</div>
    <div>{props.occupation}</div>
  </div>
);

const Ky = () => (
  <Perimeter>
    <Left>
      <Name>Ky</Name>
      <Info>Hello I live in Dayton</Info>
    </Left>
    <Right>
      <ProfilePic value={kyPic} />
      <BasicInfo
        born="Germany"
        nationality="American"
        education="Georgia Tech"
        occupation="Software Engineer"
      />
    </Right>
  </Perimeter>
);

Ky.propTypes = {
  val: PropTypes.string.isRequired,
};
export default Ky;
