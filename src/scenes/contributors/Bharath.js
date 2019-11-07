import React from 'react';
import pic from '../../assets/contributor_info/images/Bharath.jpg';
import Contributor from '../../components/Contributor';

const { Name, Info, ProfilePic, BasicInfo } = Contributor;

const Bharath = () => (
  <Contributor>
    <Name>Bharath Kumar Inguva</Name>

    <Info>Info</Info>

    <ProfilePic value={pic} />

    <BasicInfo
      born="India"
      nationality="Indian"
      education="University of Dayton"
      occupation="Full Stack Developer"
    />
  </Contributor>
);

export default Bharath;
