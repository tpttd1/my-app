import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const MainLayout = React.lazy(() =>
  import(/* webpackChunkName: "Positions" */ './MainLayout')
);

const MainLayouts = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Route
        path={`${match.url}`}
        render={props => <MainLayout {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default MainLayouts;
