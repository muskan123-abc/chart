import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/common/Header";
import { useScreenFixedProvider } from "./contexts/ScreenFixedProvider";
import Home from "./views/Home";

const AppRoutes = () => {
  const { showOverlay } = useScreenFixedProvider();

  return (
    <>
      <div className={`${showOverlay ? "fix-screen-height" : ""} `}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </div>
    </>
  );
};

export default AppRoutes;
