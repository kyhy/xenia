// @flow
import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const StyledImg = styled.img`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
  height: 300px;
  width: 300px;
`;

const ProfilePic = props => (
  <div>
    <StyledImg className="icon" src={props.value} alt="icon" />
  </div>
);

ProfilePic.propTypes = {
  value: PropTypes.string.isRequired,
};
export default ProfilePic;
