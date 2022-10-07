import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/nysl.css';
import App from './App';
import { Home } from './Components/Home';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import {About} from './Components/About';
import {Contact} from './Components/Contact';
import{Rules} from './Components/Rules';
import{GameInfo} from './Components/Game_info';
import{Registration} from './Components/Rejistration';
import { SignIn } from './Components/SignIn';
import {Chat} from './Components/Chat';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route   path='/' element={<Home/>} />
      <Route   path='/about' element={<About/>} />
      <Route   path='/contact' element={<Contact/>} />
      <Route   path='/rules-and-policies' element={<Rules/>} />
      <Route   path='/game-information' element={<GameInfo/>} />
      <Route   path='/registracion-form' element={<Registration/>} />
      <Route   path='/sign-in' element={<SignIn/>} />
      <Route   path='/chat' element={<Chat/>} />

     
      </Routes>
    </BrowserRouter>
    
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
