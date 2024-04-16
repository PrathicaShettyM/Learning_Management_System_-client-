import './App.css'

import { Route,Routes } from "react-router-dom";

import RequireAuth from './Auth/RequireAuth';
import Aboutus from './pages/Aboutus';
import Contact from './pages/Contact';
import CourseDescription from './pages/Courses/CourseDescription';
import CourseList from './pages/Courses/CourseList';
import CreateCourse from './pages/Courses/CreateCourse';
import Denied from './pages/Denied';
import Home from './pages/Home';
import Notfound from './pages/Notfound';
import Signin from './pages/SignIn';
import Signup from './pages/Signup';
import EditProfile from './pages/User/EditProfile';
import Profile from './pages/User/Profile';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/aboutus' element={<Aboutus/> }/>
      <Route path='/signup' element={<Signup/>} />
      <Route path='/signin' element={<Signin/>} />
      <Route path='/contactus' element={<Contact/>} />
      <Route path='/denied' element={<Denied/>} />
      <Route path='/courses' element={<CourseList />}/>
      <Route path='/course/description' element={<CourseDescription />}/>

      <Route element={<RequireAuth allowedRoles={["ADMIN", "USER"]} />}>
        <Route path='/user/profile' element={<Profile/>}/>
        <Route path='/user/editprofile' element={<EditProfile/>}/>
      </Route>

      <Route element={<RequireAuth allowedRoles={["ADMIN"]} />}>
        <Route path='/course/create' element={<CreateCourse />}/>
      </Route>

      <Route path='/contacts' element={<Contact />}/>
      <Route path='/denied' element={<Denied />}/>
      <Route path='*' element={<Notfound />}/>
    </Routes>
 
  )
}

export default App
