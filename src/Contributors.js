import React from 'react';
import { Link, Route } from 'react-router-dom';
import Krish from './Krish'
import Kishore from './Kishore'
import Ky from './Ky'
import Bharath from './Bharath'
import Sarah from './Sarah'


const Contributors = () => (
  <div>
    <div>
      Contributors
    </div>
    <ul>
      <li><Link to='/contributors/ky'>Ky Lee</Link></li>
      <li><Link to='/contributors/kishore'>Chandra Kishore Danduri</Link></li>
      <li><Link to='/contributors/krish'>Krishna</Link></li>
      <li><Link to='/contributors/bharath'>Bharath</Link></li>
      <li><Link to='/contributors/sarah'>Sarah</Link></li>
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
