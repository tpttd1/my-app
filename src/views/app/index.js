import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const Demo = React.lazy(() =>
  import(/* webpackChunkName: "demo" */ './demo')
);
const MyLayout = React.lazy(() =>
  import(/* webpackChunkName: "i-layout" */ './layout')
);


const App = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Route
        path={`${match.url}/demo`}
        render={props => <Demo {...props} />}
      />
      <Route
        path={`${match.url}`}
        render={props => <MyLayout {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default App;
