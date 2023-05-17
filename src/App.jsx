import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './Copmponents/NavigationBar';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './Copmponents/Home';
import Collection from './Copmponents/Products/Collection';
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
import AdminCollection from './Copmponents/Admin/AdminCollection';
import { ProductsData } from './Copmponents/Products/ProductsData';
import AdminAddProducts from './Copmponents/Admin/AdminAddProducts';
import AdminEdit from './Copmponents/Admin/AdminEdit';
import UserSearch from './Copmponents/UserSearch';
import AdminSearch from './Copmponents/Admin/AdminSearch';



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



  const [products, setProducts] = useState(ProductsData);

  const [cart, setCart] = useState([]);

  const [edit, setEdit] = useState([])

  const [signup, setSignup] = useState([])

  const [auth,setAuth] = useState(false)

  const [search, setSearch] = useState()


  const data = {
    
    products,
    setProducts,

    cart,
    setCart,

    edit,
    setEdit,

    signup,
    setSignup,

    auth,
    setAuth,

    search,
    setSearch
  }
  

  return (

    <div>

        <Context.Provider value={data}>

        { admin ? null : <NavigationBar/> }

        <Routes>

          <Route path='/' element={<Home/>}/>
          <Route path='/collection' element={<Collection/>}/>
          <Route path='/men' element={<Men/>}/>
          <Route path='/women' element={<Women/>}/>
          <Route path='/kids' element={<Kids/>}/>
          <Route path='/sports' element={<Sports/>}/>
          <Route path='/view/:id' element={<ViewDetails/>}/>
          <Route path='/mycart' element={<MyCart/>}/> 
          <Route path='/login' element={<LogIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/usersearch' element={<UserSearch/>}/>
          <Route path='/adminbar' element={<AdminBar/>}/>

          <Route element={<AdminBar/>}>
            <Route path='/adminbar/adminusers' element={<AdminUsers/>}/>
            <Route path='/adminbar/admincollection' element={<AdminCollection/>}/>
            <Route path='/adminbar/adminaddproducts' element={<AdminAddProducts/>}/>
            <Route path='/adminbar/adminedit' element={<AdminEdit/>}/>
            <Route path='/adminbar/adminsearch' element={<AdminSearch/>}/>
          </Route>
          
        </Routes>

        { admin ? null : <Footer/> }

        </Context.Provider>
        
    </div>
  );
}

export default App;
