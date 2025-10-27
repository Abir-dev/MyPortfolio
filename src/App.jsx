import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from "./sections/Hero.jsx";
import ShowCaseSection from "./sections/ShowCaseSection.jsx";
import NavBar from "./components/NavBar.jsx";
import LogoSection from "./sections/logoSection.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";
import TechStack from "./sections/TechStack.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import Projects from "./pages/Projects.jsx";

const App = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={
                    <>
                        <Hero />
                        <ShowCaseSection />
                        <LogoSection />
                        <FeatureCards />
                        <ExperienceSection />
                        <TechStack />
                        <Testimonials />
                        <Contact />
                        <Footer />
                    </>
                } />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </Router>
    )
}
export default App
