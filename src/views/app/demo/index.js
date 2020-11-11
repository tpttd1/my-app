import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Demo = React.lazy(() =>
  import(/* webpackChunkName: "OrganizationList" */ './Demo')
);

const App = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Route
        path={`${match.url}`}
        render={props => <Demo {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default App;
