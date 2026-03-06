import Footer from "./components/Footer.tsx";
import Header from "./components/Header.tsx";
import Nav from "./components/Nav.tsx";
import {createBrowserRouter, Route, RouterProvider, Routes} from "react-router";
import Home from "./components/mains/Home.tsx";
import Education from "./components/mains/Education.tsx";
import Experiences from "./components/mains/Experiences.tsx";
import Projects from "./components/mains/Projects.tsx";
import Certifications from "./components/mains/Certifications.tsx";
import References from "./components/mains/References.tsx";
import "./index.css";

function Root(){
    return(
        <div id="page-wrapper">
            <Header/>
            <div id="nav-main">
                <Nav/>
                <Routes>
                    <Route path={'/'} element={<Home/>}/>
                    <Route path={'/education.html'} element={<Education/>}/>
                    <Route path={'/experiences.html'} element={<Experiences/>}/>
                    <Route path={'/projects.html'} element={<Projects/>}/>
                    <Route path={'/certifications.html'} element={<Certifications/>}/>
                    <Route path={'/references.html'} element={<References/>}/>
                </Routes>
            </div>
            <Footer/>
        </div>
    )
}

const router = createBrowserRouter(
    [{path:"*", Component:Root}]
)

export default function App(){
    return (
        <RouterProvider router={router}/>
    )
}