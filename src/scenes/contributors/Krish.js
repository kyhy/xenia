/* eslint-disable dot-notation */
import React from 'react';
import PropTypes from 'prop-types';
import ContributorSkel from '../../components/ContributorSkel';

const Krish = props => (
  <div>
    <ContributorSkel value={props.val} />
  </div>
);

Krish.propTypes = {
  val: PropTypes.string.isRequired,
};
export default Krish;
