import React from 'react';
import { Route } from 'react-router-dom';
import ImageStrip from '../components/ImageStrip';
import Krish from './contributors/Krish';
import Kishore from './contributors/Kishore';
import Ky from './contributors/Ky';
import Bharath from './contributors/Bharath';
import Sarah from './contributors/Sarah';

const Contributors = () => (
  <div>
    <div>Contributors</div>
    <ImageStrip />
    <div>
      <Route path="/contributors/ky" render={() => <Ky val="Ky" />} />
      <Route
        path="/contributors/kishore"
        render={() => <Kishore val="CKD" />}
      />
      <Route path="/contributors/krish" render={() => <Krish val="Krish" />} />
      <Route
        path="/contributors/bharath"
        render={() => <Bharath val="Bharath" />}
      />
      <Route path="/contributors/sarah" render={() => <Sarah val="Sara" />} />
    </div>
  </div>
);

export default Contributors;
