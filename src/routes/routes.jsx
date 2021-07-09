import { Route, Switch } from "react-router-dom";
// import Route from "./route";
import { Home } from "../pages/Home";
import Search from "../pages/Search";
import Dashboard from "../pages/Dashboard";
import PageNotFound from "../pages/PageNotFound";
import Messages from "../pages/Messages";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/messages">
        <Messages />
      </Route>
      <Route>
        <PageNotFound />
      </Route>

      {/* <Route path="/" exact component={Home} /> */}
    </Switch>
  );
};

export default Routes;
