import { Switch } from "react-router-dom";
import Route from "./route";
import { Home } from "../pages/Home";
import  Resume  from "../pages/Resume";
import Search from "../pages/Search";
import Dashboard from "../pages/Dashboard";
import PageNotFound from '../pages/PageNotFound';
import UserLogin from '../pages/UserLogin';
import Register from '../pages/UserRegister';
import CompanyRegister from '../pages/CompanyRegister';

const Routes = () => {
  return (
    <Switch>
<<<<<<< HEAD
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/resume" exact component={Resume} />
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

      {/* <Route path="/" exact component={Home} /> */}
=======
      <Route path="/" exact component={Home} />      
      <Route path="/search" exact component={Search} />
      <Route path="/login" exact component={UserLogin} />
      <Route path="/register" exact component={Register} />
      <Route path="/company" exact component={CompanyRegister} />      
      <Route isPrivate={true} path="/dashboard" exact component={Dashboard} />      
      <Route component={PageNotFound} />      
>>>>>>> d5c94a2536c51f7fc77bffabddb652101faf27ef
    </Switch>
  );
};

export default Routes;
