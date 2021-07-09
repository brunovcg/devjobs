import { Route, Switch } from "react-router-dom";
// import Route from "./route";
import { Home } from "../pages/Home";
import Messages from "../pages/Messages";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/messages">
        <Messages></Messages>
      </Route>

      {/* <Route path="/" exact component={Home} /> */}
    </Switch>
  );
};

export default Routes;
