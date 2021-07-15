import { Redirect, Route as ReactDOMRoute } from "react-router-dom";
import { useToken } from "../providers/TokenProvider";

const Route = ({isOpen, isPrivate = false, component : Component, ...rest }) => {
  const { userToken } = useToken();

  return (
    <ReactDOMRoute
      {...rest}
      render={() => {

        return isOpen ?

        <Component/> :


        isPrivate === !!userToken 
        ? (
          <Component />
        ) 
        : (
          <Redirect
            to={{
              pathname: isPrivate 
              ? "/" 
              : "/dashboard",
            }}
          />
        );
      }}
    />
  );
};

export default Route;
