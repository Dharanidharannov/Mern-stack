import React from "react";
import Hoomepage from "./Page/Hoomepage";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./Page/AboutPage";
import Nav from "./Components/Homecomponent/Nav";
import Mininav from "./Components/Homecomponent/Mininav";
import NotFoundPage from "./Page/NotFoundPage";
import ServicePage from "./Page/ServicePage";
import PortfolioPage from "./Page/PortfolioPage";
import TestmonialPage from "./Page/TestmonialPage";
import { BlogPage } from "./Page/BlogPage";
import ContactPage from "./Page/ContactPage";
import FormPage from "./Page/FormPage";
import './index.css'
import UserEditPage from "./Page/UserEditPage";


function App() {
    return (
        <div>
            <BrowserRouter>


                <Mininav />
                <Nav />


                <Routes>
                    
                    <Route path="/" Component={Hoomepage} />
                    <Route path="/*" element={<NotFoundPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/services" element={<ServicePage />} />
                    <Route path="/portfolio" element={<PortfolioPage />} />
                    <Route path="/testmonial" element={<TestmonialPage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/contact/*" element={<ContactPage />} />
                    <Route path="/form" element={<FormPage />} />
                    <Route path="/contact/:id" element={<ContactPage />} />
                    <Route path="/user/:id" element={<UserEditPage />} />

                </Routes>



            </BrowserRouter>
        </div>
    )
}
export default App;