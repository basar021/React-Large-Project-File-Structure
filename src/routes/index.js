import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import layouts
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';

// import pages
import Home from '../pages/home';
import About from '../pages/about';

export default function Index() {
    return (
        <BrowserRouter>
            
            <Header />

            <Routes>

                <Route path='/' element={<Home />}  />

            </Routes>

            <Footer />
            
        </BrowserRouter>
    );
};
