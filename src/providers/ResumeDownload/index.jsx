import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services/api";
import { useToken } from "../TokenProvider";

export const ResumeContext = createContext();

export const ResumeProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(
    localStorage.getItem("@DevJobs:Token:User") || ""
  );

  const userId = localStorage.getItem("@DevJobs:User:Id");

  const endpoints = [
    "education",
    "experience",
    "messages",
    "techSkills",
    "otherSkills",
  ];

  const apiConfig = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    },
  };

   const [resume, setResume] = useState({});

  const getResumeInfo = (userId) => {
    api
      .get(`/users?id=${userId}`, apiConfig)
      .then((response) => setResume({ ...resume, users: response.data[0] }))
      .catch((_) => console.log("something went wrong"));

    for (let i = 0; i < endpoints.length; i++) {
      api
        .get(`/${endpoints[i]}?userId=${userId}`, apiConfig)
        .then((response) =>
          setResume((prevState) => {
            return { ...prevState, [endpoints[i]]: response.data };
          })
        )
        .catch((_) => console.log("something went wrong"));
    }
  };

  return (
    <ResumeContext.Provider value={{ getResumeInfo, resume }}>
      {children}
    </ResumeContext.Provider>
  );
};

export const useResume = () => useContext(ResumeContext);
