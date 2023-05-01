import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './Copmponents/NavigationBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import { Context } from './Copmponents/Context';
import { useState } from 'react';
import './App.css';

function App() {

  const [state, setState] = useState([]);

  const data = {
    state,
    setState
  }

  return (

    <div>

      <BrowserRouter>

        <NavigationBar/>

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
          <Route path='signup' element={<SignUp/>}/>
           
        </Routes>

        </Context.Provider>

        <Footer/>

      </BrowserRouter>
         
    </div>
  );
}

export default App;
