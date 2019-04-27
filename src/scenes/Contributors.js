import React from 'react';
import { Route } from 'react-router-dom';
import ImageStrip from '../components/ImageStrip';
import Krish from './contributors/Krish';
import Kishore from './contributors/Kishore';
import Ky from './contributors/Ky';
import Bharath from './contributors/Bharath';
import Sarah from './contributors/Sarah';

const Contributors = props => (
  <div>
    <div>Contributors</div>
    <ImageStrip match={props.match} />
    <div>
      <Route path="/contributors/ky" render={() => <Ky />} />
      <Route path="/contributors/kishore" render={() => <Kishore />} />
      <Route path="/contributors/krish" render={() => <Krish />} />
      <Route path="/contributors/bharath" render={() => <Bharath />} />
      <Route path="/contributors/sarah" render={() => <Sarah />} />
    </div>
  </div>
);

export default Contributors;
