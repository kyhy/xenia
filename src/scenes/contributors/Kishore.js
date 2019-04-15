/* eslint-disable dot-notation */
import React from 'react';
import PropTypes from 'prop-types';
import ContributorSkel from '../../components/ContributorSkel';

const Kishore = props => (
  <div>
    <ContributorSkel value={props.val} />
  </div>
);

Kishore.propTypes = {
  val: PropTypes.string.isRequired,
};
export default Kishore;
