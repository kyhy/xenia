/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from '@emotion/styled';
import ProfilePic from './ProfilePic';

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
  <Perimeter>
    <Left>
      <div>
        <b>Born</b>
      </div>
      <div>
        <b>Nationality</b>
      </div>
      <div>
        <b>Education</b>
      </div>
      <div>
        <b>Occupation</b>
      </div>
    </Left>
    <Right>
      <div>{props.born}</div>
      <div>{props.nationality}</div>
      <div>{props.education}</div>
      <div>{props.occupation}</div>
    </Right>
  </Perimeter>
);

const findType = (children, Value, x) =>
  children.map(component => {
    // console.log(component);
    if (component.type === Value) {
      switch (x) {
        case 1:
          return <Value>{component.props.children}</Value>;
        case 2:
          return <Value value={component.props.value} />;
        case 3:
          return <Value {...component.props} />;
        default:
          return null;
      }
    }
  });

const Contributor = props => (
  <Perimeter>
    <Left>
      {findType(props.children, Name, 1)}
      {findType(props.children, Info, 1)}
    </Left>
    <Right>
      {findType(props.children, ProfilePic, 2)}
      {findType(props.children, BasicInfo, 3)}
    </Right>
  </Perimeter>
);

// Contributor.propTypes = {
//   born: PropTypes.string.isRequired,
// };
Contributor.Name = Name;
Contributor.Info = Info;
Contributor.BasicInfo = BasicInfo;
Contributor.ProfilePic = ProfilePic;

export default Contributor;
