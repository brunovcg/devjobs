import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services/api";

export const ResumeContext = createContext();

export const ResumeProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(
    localStorage.getItem("@DevJobs:Token:User") || ""
  );
  const [userId, setUserId] = useState(
    localStorage.getItem("@DevJobs:User:Id") || ""
  );

  const endpoints = [
    "users",
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

  const getResumeInfo = (optionalId) => {
    let resumeInfo = {};

    for (let i = 0; i < endpoints.length; i++) {
      api
        .get(`/${endpoints[i]}/${optionalId ? optionalId : userId}`, apiConfig)
        .then((response) => (resumeInfo[endpoints[i]] = response.data))
        .catch((_) => console.log("something went wrong"));
    }

    console.log(resumeInfo)
  };

  // const [resume]

  return <ResumeContext.Provider value={{getResumeInfo}}>{children}</ResumeContext.Provider>;
};

export const useResume = () => useContext(ResumeContext);
