import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Calendar from './Calendar';


ReactDOM.render(
  <Router>
    <div>
      <Calendar/>

      <Switch>
        <Route exact path="/" component={App}/>

      </Switch>

    </div>
  </Router>,

  document.getElementById('root')
);
registerServiceWorker();
