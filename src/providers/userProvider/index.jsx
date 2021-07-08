import { createContext, useContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

export const userContext = createContext();

export const userProvider = ({ children }) => {
  const [userToken, setUserToken] = useState( JSON.parse(localStorage.getItem("token") || "") );
  const [userId, setUserId] = useState();

  useEffect(() => {
    if (userToken !== "") {
      const decoded = jwt_decode(userToken);
      const { user_id } = decoded;
      setUserId(user_id);
    }
  }, [userToken]);

  return (
    <TokenContext.Provider value={{ userToken, setUserToken, userId }}>
      {children}
    </TokenContext.Provider>
  );
};

export const useToken = () => useContext(userContext);