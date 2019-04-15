/* eslint-disable dot-notation */
import React from 'react';
import PropTypes from 'prop-types';
import ContributorSkel from '../../components/ContributorSkel';

const Ky = props => (
  <div>
    <ContributorSkel value={props.val} />
  </div>
);

Ky.propTypes = {
  val: PropTypes.string.isRequired,
};
export default Ky;
