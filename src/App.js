import React, { Component, Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

const ViewMain = React.lazy(() =>
  import(/* webpackChunkName: "views" */ './views/app')
);

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <Fragment>
        <Router>
          <Switch>
            <Route
              path="/app"
              render={props => <ViewMain {...props} />}
            />
            <Route
              path="/"
              exact
              render={props => <ViewMain {...props} />}
            />
            <Redirect to="/error" />
          </Switch>
        </Router>
      </Fragment>
    )
  }

}
export default App;