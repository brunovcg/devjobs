import { ToastContainer } from "react-toastify";
import Routes from "./routes/routes";
import {useToken} from './providers/TokenProvider'
import { useResume } from "./providers/ResumeDownload";


const App = () => {

  const {userId, getUserId} = useToken()
  const {getResumeInfo, resumeInfo} = useResume()

  return (
    <div className="App">
      <ToastContainer />
      <Routes />
    </div>
  );
};

export default App;
