// U78784426
import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Gallery from './Gallery';

function App() {
  const [tours, setTours] = useState([]);

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Gallery tours={tours} setTours={setTours} />
          </Route>
          {/* Add more routes if needed */}
        </Switch>
      </div>
    </Router>);}

export default App;