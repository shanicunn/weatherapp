import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Monday from './Components/Monday';
import Tuesday from './Components/Tuesday';
import Wednesday from './Components/Wednesday';
import Thursday from './Components/Thursday';
import Friday from './Components/Friday';
import Saturday from './Components/Saturday';
import Sunday from './Components/Sunday';
import Home from './Components/Home';


function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sunday">Sunday</Link>
            </li>
            <li>
              <Link to="/monday">Monday</Link>
            </li>
            <li>
              <Link to="/tuesday">Tuesday</Link>
            </li>
            <li>
              <Link to="/wednesday">Wednesday</Link>
            </li>
            <li>
              <Link to="/thursday">Thursday</Link>
            </li>
            <li>
              <Link to="/friday">Friday</Link>
            </li>
            <li>
              <Link to="/saturday">Saturday</Link>
            </li>

          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/sunday">
            <Sunday />
          </Route>
          {/* <Route path="/monday">
            <Monday />
          </Route> */}
          {/* <Route path="/tuesday">
            <Tuesday />
          </Route> */}
          {/* <Route path="/wednesday">
            <Wednesday />
          </Route> */}
          {/* <Route path="/thursday">
            <Thursday />
          </Route> */}
          <Route path="/friday">
            <Friday />
          </Route>
          {/* <Route path="/saturday">
            <Saturday />
          </Route> */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

    </div>
  );
}

export default App;
