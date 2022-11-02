import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/nysl.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { Home } from './components/Home';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import {About} from './components/About';
import {Contact} from './components/Contact';
import{Rules} from './components/Rules';
import{GameInfo} from './components/Game_info';
import { SignIn } from './components/SignIn';
import {OctoberMonth} from './tabla/OctoberMonth';
import { SeptemberMonth } from './tabla/SeptemberMonth';
import {Register} from './components/chat/Register';
import {Login} from './components/chat/Login';
import { AuthContextProvider } from './components/chat/AuthContext';
import { ChatContextProvider } from './components/chat/ChatContext';
import { Chat } from './components/Chat';



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
