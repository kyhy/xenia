import React from 'react';
import { Link, Route } from 'react-router-dom';
import Krish from './Krish';
import Kishore from './Kishore';
import Ky from './Ky';
import Bharath from './Bharath';
import Sarah from './Sarah.1';

const Contributors = () => (
  <div>
    <div>Contributors</div>
    <ul>
      <li>
        <Link to="ky">Ky Lee</Link>
      </li>
      <li>
        <Link to="kishore">Chandra Kishore Danduri</Link>
      </li>
      <li>
        <Link to="krish">Krishna</Link>
      </li>
      <li>
        <Link to="bharath">Bharath</Link>
      </li>
      <li>
        <Link to="sarah">Sarah</Link>
      </li>
    </ul>
    <div>
      <Route path="/contributors/ky" component={Ky} />
      <Route path="/contributors/kishore" component={Kishore} />
      <Route path="/contributors/krish" component={Krish} />
      <Route path="/contributors/bharath" component={Bharath} />
      <Route path="/contributors/sarah" component={Sarah} />
    </div>
  </div>
);

export default Contributors;
