import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/nysl.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { Home } from './Components/Home';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import {About} from './Components/About';
import {Contact} from './Components/Contact';
import{Rules} from './Components/Rules';
import{GameInfo} from './Components/Game_info';
import { SignIn } from './Components/SignIn';
import {OctoberMonth} from './Tabla/OctoberMonth';
import { SeptemberMonth } from './Tabla/SeptemberMonth';
import {Register} from './Components/Chat/Register';
import {Login} from './Components/Chat/Login';
import { AuthContextProvider } from './Components/Chat/AuthContext';
import { ChatContextProvider } from './Components/Chat/ChatContext';
import { Chat } from './Components/Chat';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <ChatContextProvider>
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route   path='/' element={<Home/>} />
      <Route   path='/about' element={<About/>} />
      <Route   path='/contact' element={<Contact/>} />
      <Route   path='/rules-and-policies' element={<Rules/>} />
      <Route   path='/game-information' element={<GameInfo/>} />
      <Route   path='/sign-in' element={<SignIn/>} />
      <Route   path='/octobers' element={<OctoberMonth/>} />
      <Route   path="/octobers/:octoberId"  element={<OctoberMonth/>} />
      <Route   path="/septembers/:septemberId"  element={<SeptemberMonth/>} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="chat" element={<Chat />} />
      
      
      
      
     
      </Routes>
    </BrowserRouter>
    
    
  </React.StrictMode>

</ChatContextProvider>
</AuthContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
