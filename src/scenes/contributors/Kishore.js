import React from 'react';
import pic from '../../assets/contributor_info/images/Kishore.jpg';
import Contributor from '../../components/Contributor';

const { Name, Info, ProfilePic, BasicInfo } = Contributor;

const Kishore = () => (
  <Contributor>
    <Name>Chandra Kishore Danduri</Name>

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

export default Kishore;
