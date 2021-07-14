import { ToastContainer } from "react-toastify";
import Routes from "./routes/routes";
import {useToken} from './providers/TokenProvider'
import { useResume } from "./providers/ResumeDownload";


const App = () => {

  const {userId, getUserId} = useToken()
  const {getResumeInfo, resumeInfo} = useResume()

  return (
    <div className="App">
      <button onClick={()=>console.log(resumeInfo.users.objective)}>teste</button>
      <ToastContainer />
      <Routes />
    </div>
  );
};

export default App;
