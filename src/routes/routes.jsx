import { Switch } from "react-router-dom";
import Route from "./route";
import { Home } from "../pages/Home";
import Search from "../pages/Search";
import Dashboard from "../pages/Dashboard";
import PageNotFound from '../pages/PageNotFound';
import UserLogin from '../pages/UserLogin';
import Register from '../pages/UserRegister';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />      
      <Route path="/search" exact component={Search} />
      <Route path="/login" exact component={UserLogin} />
      <Route path="/register" exact component={Register} />      
      <Route isPrivate={true} path="/dashboard" exact component={Dashboard} />      
      <Route component={PageNotFound} />      
    </Switch>
  );
};

export default Routes;
