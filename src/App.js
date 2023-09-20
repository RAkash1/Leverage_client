import './App.css';
import SignUp from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import {Route , Routes } from 'react-router-dom';
function App() {

  return (
    
    <div className="App">
    <Routes>
    <Route path="/" element={<Dashboard/>} />
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<SignUp/>}/>
    </Routes>
    {/* <SignUp/>
    <Login/>
    <Dashboard/> */}
    </div>
  );
}

export default App;
