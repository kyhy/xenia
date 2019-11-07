import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import UserImage from './UserImage';
import KyPic from '../assets/contributor_info/images/Ky.jpg';
import KishorePic from '../assets/contributor_info/images/Kishore.jpg';
import KrishPic from '../assets/contributor_info/images/Krishna.jpg';
import BharathPic from '../assets/contributor_info/images/Bharath.jpg';
import SaraPic from '../assets/contributor_info/images/Sara.jpg';

const StyledUl = styled.ul`
  display: flex;
  align-items: stretch; /* Default */
  justify-content: space-around;
  width: 100%;
  background: #cacaca;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

const StyledLi = styled.li`
  float: left;
  display: block;
  flex: 0 1 auto; /* Default */
  list-style-type: none;
  background: #fafafa;
`;

const ImageStrip = props => (
  <div>
    <StyledUl>
      <StyledLi>
        <Link to={`${props.match.path}/ky`}>
          <UserImage user="Ky" pic={KyPic} desc="Team Lead" />
        </Link>
      </StyledLi>
      <StyledLi>
        <Link to={`${props.match.path}/kishore`}>
          <UserImage user="Kishore" pic={KishorePic} desc="Developer" />
        </Link>
      </StyledLi>
      <StyledLi>
        <Link to={`${props.match.path}/krish`}>
          <UserImage user="Krish" pic={KrishPic} desc="Developer" />
        </Link>
      </StyledLi>
      <StyledLi>
        <Link to={`${props.match.path}/bharath`}>
          <UserImage user="Bharath" pic={BharathPic} desc="Developer" />
        </Link>
      </StyledLi>
      <StyledLi>
        <Link to={`${props.match.path}/sarah`}>
          <UserImage user="Sara" pic={SaraPic} desc="Developer" />
        </Link>
      </StyledLi>
    </StyledUl>
  </div>
);

export default ImageStrip;
