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

import setupFirebase from './setupFirebase'

import registerServiceWorker from './registerServiceWorker';
import HomeScreen from "./HomeScreen";
import FoodScreen from "./FoodScreen";
import ExercisesScreen from "./ExercisesScreen";
import SettingsScreen from "./SettingsScreen";
import LoginScreen from './LoginScreen';
import ProfileCreator from "./RegisterScreen";
import ProfileChecker from "./ProfileChecker";

setupFirebase();

ReactDOM.render(
  <Router>
    <div>
      <ProfileChecker>
        <Switch>
          {/*<Route exact path="/" component={LoginScreen}/>*/}
          <Route exact path="/" component={HomeScreen}/>
          <Route exact path="/food" component={FoodScreen}/>
          <Route exact path="/exercises" component={ExercisesScreen}/>
          <Route exact path="/settings" component={SettingsScreen}/>
          {/*<Route exact path="/profile" component={ProfileCreator}/>*/}
        </Switch>
      </ProfileChecker>
    </div>
  </Router>
  , document.getElementById('root')
);
registerServiceWorker();
