import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import HomeScreen from "./HomeScreen";
import FoodScreen from "./FoodScreen";
import ExercisesScreen from "./ExercisesScreen";
import CalorieTableScreen from "./CalorieTableScreen";
import SettingsScreen from "./SettingsScreen";
import NavBar from "./NavBar";
import ProfileCreator from "./ProfileCreator";
import ProfileChecker from "./ProfileChecker";



ReactDOM.render(
  <Router>
    <div>
      <ProfileChecker>
      <Switch>
        <Route exact path="/" component={HomeScreen}/>
        <Route exact path="/food" component={FoodScreen}/>
        <Route exact path="/exercises" component={ExercisesScreen}/>
        <Route exact path="/calories" component={CalorieTableScreen}/>
        <Route exact path="/settings" component={SettingsScreen}/>
        <Route exact path="/profile" component={ProfileCreator}/>
      </Switch>
      <NavBar/>
      </ProfileChecker>
    </div>
  </Router>
  , document.getElementById('root')
);
registerServiceWorker();

