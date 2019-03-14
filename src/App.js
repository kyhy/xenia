import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Contributors from './Contributors';
import Nav from './Nav';
import Home from './Home';

/*
routes:

/             -> home page
/contributors -> contributor page

*/

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/contributors" component={Contributors} />
      </div>
    </Router>
  );
}

export default App;
