import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import {Route, Link, BrowserRouter as Router, Routes} from 'react-router-dom';
import Iphone from "./pages/Iphone";
import Iwatch from "./pages/Iwatch";

function App() {
    return (
        <div className="">
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/home' element={<Home/>} />
                <Route path='/iphone' element={<Iphone/>} />
                <Route path='/iwatch' element={<Iwatch/>} />
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
