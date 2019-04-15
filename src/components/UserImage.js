import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
// import pic from './assets/contributor_info/images/Ky.jpg';

const Effect = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
  top: 0;
  left: 0;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scaleY(1.1);
  }
`;

const StyledImg = styled.div`
  position: relative;
  z-index: 1;
  width: 250px;
  height: 250px;
  background: url(${props => props.pict}) no-repeat;
  background-size: 250px 250px;
  &:after {
    content: '';
    width: 250px;
    height: auto;
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
  &:after {
    background: -moz-linear-gradient(
      top,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.75) 100%
    ); /* FF3.6+ */
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(0%, rgba(0, 0, 0, 0)),
      color-stop(100%, rgba(0, 0, 0, 0.75))
    ); /* Chrome,Safari4+ */
    background: -webkit-linear-gradient(
      top,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.75) 100%
    ); /* Chrome10+,Safari5.1+ */
    background: -o-linear-gradient(
      top,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.75) 100%
    ); /* Opera 11.10+ */
    background: -ms-linear-gradient(
      top,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.75) 100%
    ); /* IE10+ */
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.75) 100%
    ); /* W3C */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#a6000000',GradientType=0 ); /* IE6-9 */
  }
`;

const StyledDiv = styled.div`
  position: absolute;
  color: #ffffff;
  z-index: 2;
  bottom: 0;
  left: 10px;
  font-size: 150%;
  & > div {
    font-size: 50%;
  }
`;
const UserImage = props => (
  <div>
    <Effect>
      <StyledDiv>
        {props.user}
        <div>{props.desc}</div>
      </StyledDiv>
      <StyledImg pict={props.pic} />
    </Effect>
  </div>
);

UserImage.propTypes = {
  user: PropTypes.string.isRequired,
  pic: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
export default UserImage;
