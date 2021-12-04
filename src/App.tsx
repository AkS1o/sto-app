import { Routes, Route } from "react-router-dom";

import DefaultLayout from './components/Layout/DefaultLayout';
import Home from "./view/Home"
import NoMath from './view/NoMath';

import AuthLayuot from './components/Layout/AuthLayout'
import Login from './view/Auth/Login';
import Register from './view/Auth/Register';

import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <DefaultLayout /> }>
          <Route index element={<Home />} />
          <Route path="*" element={<NoMath />} />
        </Route>

        <Route path="/" element={ <AuthLayuot />} >
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
