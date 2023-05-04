import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './Copmponents/NavigationBar';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Copmponents/Home';
import Collections from './Copmponents/Products/Collections';
import Men from './Copmponents/Men';
import Women from './Copmponents/Women';
import Kids from './Copmponents/Kids';
import Sports from './Copmponents/Sports';
import ViewDetails from './Copmponents/ViewDetails';
import MyCart from './Copmponents/MyCart';
import LogIn from './Copmponents/LogIn';
import SignUp from './Copmponents/SignUp';
import Footer from './Copmponents/Footer';
import AdminPage from './Copmponents/Admin/AdminPage';
import { Context } from './Copmponents/Context';
import { useEffect, useState } from 'react';
import './App.css';
import Users from './Copmponents/Admin/Users';
import AdminProducts from './Copmponents/Admin/AdminProducts';


function App() {


  const location = useLocation();
  const [admin, setAdmin] = useState(false);

  useEffect(()=>{

    if(location.pathname.includes("adminpage")){
      setAdmin(true)
    }else{
      setAdmin(false)
    }
  },[location])



  const [state, setState] = useState([]);
  const [signup, setSignup] = useState([]);


  const data = {
    state,
    setState,
    signup,
    setSignup
  }
  

  return (

    <div>

        { admin ? null : <NavigationBar/> }

        <Context.Provider value={data}>

        <Routes>

          <Route path='/' element={<Home/>}/>
          <Route path='/collections' element={<Collections/>}/>
          <Route path='/men' element={<Men/>}/>
          <Route path='/women' element={<Women/>}/>
          <Route path='/kids' element={<Kids/>}/>
          <Route path='/sports' element={<Sports/>}/>
          <Route path='/view/:id' element={<ViewDetails/>}/>
          <Route path='/mycart' element={<MyCart/>}/>    
          <Route path='/login' element={<LogIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/adminpage' element={<AdminPage/>}/>
          <Route element={<AdminPage/>}>
            <Route path='/adminpage/users' element={<Users/>}/>
            <Route path='/adminpage/adminproducts' element={<AdminProducts/>}/>
          </Route>
          
        </Routes>

        </Context.Provider>

        { admin ? null : <Footer/> }
        
    </div>
  );
}

export default App;
