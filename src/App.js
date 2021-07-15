import { ToastContainer } from "react-toastify";
import Routes from "./routes/routes";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <Routes />
    </div>
  );
};

export default App;
