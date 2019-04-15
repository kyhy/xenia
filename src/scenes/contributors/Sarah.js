/* eslint-disable dot-notation */
import React from 'react';
import PropTypes from 'prop-types';
import ContributorSkel from '../../components/ContributorSkel';

const Sarah = props => (
  <div>
    <ContributorSkel value={props.val} />
  </div>
);

Sarah.propTypes = {
  val: PropTypes.string.isRequired,
};
export default Sarah;
