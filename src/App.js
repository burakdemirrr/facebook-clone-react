import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import { useSelector } from 'react-redux';
import { selectUser } from './redux/reducer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  

function App() {
  const user=useSelector(selectUser);
  return (
    <div className="App">


      <BrowserRouter>
      <ToastContainer/>
      <Routes>
        {!user ? <Route path="/" element={<Login/>}/>
        :
        <Route path="/home" element={<Home/>}/>
        }
        
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
