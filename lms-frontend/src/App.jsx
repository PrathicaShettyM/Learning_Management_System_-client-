import './App.css'

import { Route,Routes } from "react-router-dom";

import Aboutus from './pages/Aboutus';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Notfound from './pages/Notfound';
import Signin from './pages/SignIn';
import Signup from './pages/Signup';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/aboutus' element={<Aboutus/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/contactus' element={<Contact/>}/>
      <Route path='*' element={<Notfound/>}/>
    </Routes>
 
  )
}

export default App
