import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import {useHistory} from 'react-router-dom';
// import Login from './components/Login';
// import Landing from "./components/Landing";
// import CreateCourse from './components/CreateCourse';
// import Register from './components/Register';
// import ShowCourses from './components/ShowCourses';
import Signup from './signup.jsx';
import SignIN from './signin.jsx';
import Appbar from './Appbar.jsx';
import Addcourse from './addcourse.jsx';

// This file shows how you can do routing in React.
// Try going to /login, /register, /about, /courses on the website and see how the html changes
// based on the route.
// You can also try going to /random and see what happens (a route that doesnt exist)
function App() {

   
    return (

      <div style={{width :"100vw",
      height : " 100vh",
      backgroundColor : "#eeeee",}}>
      
      {/* <Addcourse></Addcourse> */}
      {/* <Signup></Signup> */}
     
        <Router>
        <Appbar></Appbar>
            <Routes>
                <Route path= "/addcourse" element={<Addcourse />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/signIn" element={<SignIN />} />
                
            </Routes>
        </Router>

        </div>
    );
}

export default App;