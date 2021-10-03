import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage";

export default function AppRouter() {
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Suspense>
      </Router>
    </>
  );
}
