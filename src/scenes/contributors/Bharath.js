/* eslint-disable dot-notation */
import React from 'react';
import PropTypes from 'prop-types';
import ContributorSkel from '../../components/ContributorSkel';

const Bharath = props => (
  <div>
    <ContributorSkel value={props.val} />
  </div>
);

Bharath.propTypes = {
  val: PropTypes.string.isRequired,
};
export default Bharath;
