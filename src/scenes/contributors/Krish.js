import React from 'react';
import pic from '../../assets/contributor_info/images/Krishna.jpg';
import Contributor from '../../components/Contributor';

const { Name, Info, ProfilePic, BasicInfo } = Contributor;

const Krish = () => (
  <Contributor>
    <Name>Sai Krishna Phaninder</Name>

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

export default Krish;
