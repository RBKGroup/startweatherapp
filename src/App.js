import React from 'react';
//import SearchBooks from "./search.js";
import './App.css';
import Registration from './registration.js';
import Login from './login.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
// import App2 from './App2'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: true,
    };
  }
  setUserAuth = (value) => this.setState({ isAuthenticated: true });
  render() {
    return (
      <div className='app'>
        <Router>
          <Switch>
            <Route path='/auth/login'>
              <Login setUserAuth={this.setUserAuth} />
            </Route>
            <Route exact path='/auth/reg'>
              <Registration setUserAuth={this.setUserAuth} />
            </Route>
            <PrivateRoute isAuthenticated={this.state.isAuthenticated} path='/'>
              {/* <App2 /> */}
              <div>
                <h1>helloooo world</h1>
              </div>
            </PrivateRoute>
          </Switch>
        </Router>
      </div>
    );
  }
}
function PrivateRoute({ children, isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/auth/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default App;
