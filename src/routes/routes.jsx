import { Route, Switch } from "react-router-dom";
// import Route from "./route";
import { Home } from "../pages/Home";
<<<<<<< HEAD
import { Resume } from "../pages/Resume";

=======
import Search from "../pages/Search";
import Dashboard from "../pages/Dashboard";
import PageNotFound from "../pages/PageNotFound";
import Messages from "../pages/Messages";
import ResumeVisualization from "../pages/ResumeVisualization";
>>>>>>> 1117ec2bdc0be201a5369f88c75b524429a3037d
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
<<<<<<< HEAD
      <Route path="/resume" exact component={Resume} />
=======
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/messages">
        <Messages />
      </Route>
      <Route path="/resumevisualization">
        <ResumeVisualization />
      </Route>
      <Route>
        <PageNotFound />
      </Route>
>>>>>>> 1117ec2bdc0be201a5369f88c75b524429a3037d

      {/* <Route path="/" exact component={Home} /> */}
    </Switch>
  );
};

export default Routes;
