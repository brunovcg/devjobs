import Header from "./components/Header";
import Routes from './routes/routes';
import {ToastContainer} from 'react-toastify';


const App = () => {
  return (
    <div className="App">
      
      <Routes/>
      <ToastContainer />

    </div>
  );
}

export default App;
