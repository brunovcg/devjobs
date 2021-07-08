import { Route, Switch } from "react-router-dom";
// import Route from "./route";
import { Home } from "../pages/Home";
import { Resume } from "../pages/Resume";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/resume" exact component={Resume} />

      {/* <Route path="/" exact component={Home} /> */}
    </Switch>
  );
};

export default Routes;
