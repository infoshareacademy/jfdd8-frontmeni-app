import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './index.css';
import store from './store'
import registerServiceWorker from './registerServiceWorker';
import HomeScreen from "./HomeScreen";
import FoodScreen from "./FoodScreen";
import ExercisesScreen from "./ExercisesScreen";
import SettingsScreen from "./SettingsScreen";
import Auth from "./components/Auth";
// import ProgressBarInCalendar from './ProgressBarInCalendar'

ReactDOM.render(
  <Provider store={store}>
  <Router>
    <div>
      <Auth>
        <Switch>
          <Route exact path="/" component={HomeScreen}/>
          <Route exact path="/food" component={FoodScreen}/>
          <Route exact path="/exercises" component={ExercisesScreen}/>
          <Route exact path="/settings" component={SettingsScreen}/>
        </Switch>
      </Auth>
    </div>
  </Router>
  </Provider>
  , document.getElementById('root')
);
registerServiceWorker();
