import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const List = React.lazy(() =>
  import(/* webpackChunkName: "OrganizationList" */ './List')
);

const App = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Route
        path={`${match.url}`}
        render={props => <List {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default App;
