import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,

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
import GoalsMenu from "./GoalsMenu"
import Auth from "./components/Auth";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Switch>
          <Auth>
            <Route exact path="/" component={HomeScreen}/>
            <Route exact path="/food" component={FoodScreen}/>
            <Route exact path="/exercises" component={ExercisesScreen}/>
            <Route exact path="/settings" component={SettingsScreen}/>
            <Route exact path="/settings/goals" component={GoalsMenu}/>
          </Auth>
        </Switch>
      </div>
    </Router>
  </Provider>
  , document.getElementById('root')
);
registerServiceWorker();
