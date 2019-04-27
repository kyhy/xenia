import React from 'react';
import pic from '../../assets/contributor_info/images/Ky.jpg';
import Contributor from '../../components/Contributor';

const { Name, Info, ProfilePic, BasicInfo } = Contributor;

const Ky = () => (
  <Contributor>
    <Name>Ky Lee</Name>

    <Info>Info</Info>

    <ProfilePic value={pic} />

    <BasicInfo
      born="Germany"
      nationality="American"
      education="Georgia Tech"
      occupation="Software Engineer"
    />
  </Contributor>
);

export default Ky;
