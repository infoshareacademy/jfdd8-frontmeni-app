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



ReactDOM.render(
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={HomeScreen}/>
        <Route exact path="/food" component={FoodScreen}/>
        <Route exact path="/exercises" component={ExercisesScreen}/>
        <Route exact path="/calories" component={CalorieTableScreen}/>
        <Route exact path="/settings" component={SettingsScreen}/>
      </Switch>
      <NavBar/>
    </div>
  </Router>
  , document.getElementById('root')
);
registerServiceWorker();

