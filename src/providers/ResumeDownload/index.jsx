import { createContext, useContext, useState } from "react";
import api from "../../services/api";

export const ResumeContext = createContext();

export const ResumeProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(
    localStorage.getItem("@DevJobs:Token:User") || ""
  );

  const userId = localStorage.getItem("@DevJobs:User:Id");

  // const endpoints = [
  //   "education",
  //   "experience",
  //   "messages",
  //   "techSkills",
  //   "otherSkills",
  // ];

  const apiConfig = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    },
  };

  const [resumeObjective, setResumeObjective] = useState([]);
  const [resumeEducation, setResumeEducation] = useState([]);
  const [resumeMessages, setResumeMessages] = useState([]);
  const [resumeExperience, setResumeExperience] = useState([]);
  const [resumeTechSkills, setResumeTechSkills] = useState([]);
  const [resumeOtherSkills, setResumeOtherSkills] = useState([]);

  const getResumeInfo = (userId) => {
    api
      .get(`/users?id=${userId}`, apiConfig)
      .then((response) => setResumeObjective(response.data[0]))
      .catch((_) => console.log("something went wrong"));

    api
      .get(`/education?userId=${userId}`, apiConfig)
      .then((response) => setResumeEducation(response.data))
      .catch((_) => console.log("something went wrong"));
    api
      .get(`/experience?userId=${userId}`, apiConfig)
      .then((response) => setResumeExperience(response.data))
      .catch((_) => console.log("something went wrong"));

    api
      .get(`/messages?userId=${userId}`, apiConfig)
      .then((response) => setResumeMessages(response.data))
      .catch((_) => console.log("something went wrong"));

    api
      .get(`/techSkills?userId=${userId}`, apiConfig)
      .then((response) => setResumeTechSkills(response.data))
      .catch((_) => console.log("something went wrong"));

    api
      .get(`/otherSkills?userId=${userId}`, apiConfig)
      .then((response) => setResumeOtherSkills(response.data))
      .catch((_) => console.log("something went wrong"));

    // api
    // .get(`/experience?userId=${userId}`, apiConfig)
    // .then((response) =>
    //   setResume((prevState) => {
    //     return { ...prevState, experience: response.data };
    //   })
    // )
    // .catch((_) => console.log("something went wrong"));

    // for (let i = 0; i < endpoints.length; i++) {
    //   api
    //     .get(`/${endpoints[i]}?userId=${userId}`, apiConfig)
    //     .then((response) =>
    //       setResume((prevState) => {
    //         return { ...prevState, [endpoints[i]]: response.data };
    //       })
    //     )
    //     .catch((_) => console.log("something went wrong"));
    // }
  };

  return (
    <ResumeContext.Provider
      value={{
        getResumeInfo,
        resumeObjective,
        resumeEducation,
        resumeOtherSkills,
        resumeExperience,
        resumeMessages,
        resumeTechSkills
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};

export const useResume = () => useContext(ResumeContext);
