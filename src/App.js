import './App.css';
import 'semantic-ui-css/semantic.min.css'
import {Route,Routes,BrowserRouter} from "react-router-dom"
import Login from './components/Login';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
