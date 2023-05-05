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
import AdminBar from './Copmponents/Admin/AdminBar';
import { Context } from './Copmponents/Context';
import { useEffect, useState } from 'react';
import './App.css';
import AdminUsers from './Copmponents/Admin/AdminUsers';
import AdminCollections from './Copmponents/Admin/AdminCollections';
import { ProductsData } from './Copmponents/Products/ProductsData';
import AdminAddProducts from './Copmponents/Admin/AdminAddProducts';
import AdminEdit from './Copmponents/Admin/AdminEdit';




function App() {


  const location = useLocation();
  const [admin, setAdmin] = useState(false);

  useEffect(()=>{

    if(location.pathname.includes("adminbar")){
      setAdmin(true)
    }else{
      setAdmin(false)
    }
  },[location])



  const [state, setState] = useState([]);

  const [products, setProducts] = useState(ProductsData);

  const [edit, setEdit] = useState([])

  const [signup, setSignup] = useState([])

  const data = {
    state,
    setState,
    
    products,
    setProducts,

    edit,
    setEdit,

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
          <Route path='/adminbar' element={<AdminBar/>}/>
          <Route element={<AdminBar/>}>
            <Route path='/adminbar/adminusers' element={<AdminUsers/>}/>
            <Route path='/adminbar/admincollections' element={<AdminCollections/>}/>
            <Route path='/adminbar/adminaddproducts' element={<AdminAddProducts/>}/>
            <Route path='/adminbar/adminedit' element={<AdminEdit/>}/>
          </Route>
          
        </Routes>

        </Context.Provider>

        { admin ? null : <Footer/> }
        
    </div>
  );
}

export default App;
