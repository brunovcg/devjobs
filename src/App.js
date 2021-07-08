import Header from "./components/Header"
import Routes from './routes/routes'
import Input from './components/Input'

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Routes/>
      <Input
        type="text"
        placeholder="teste"
        error="teste erro de novo"
        setHeight="60px"
        setWidth="300px"
        />
    
    </div>
  );
}

export default App;
