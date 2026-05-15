import { Routes, Route} from "react-router-dom";
import Navbar from "./components/Navigation/Navbar.tsx";
import "./index.css";
import Footer from "./components/Footer/Footer.tsx";
import {navigationLinks} from "./utils/content.tsx";

export default function App() {
    return (
        <div>
            <Navbar/>
                <Routes>
                    {
                        navigationLinks.map((route) => (
                        <Route
                            key={route.id}
                            path={route.href}
                            element={route.element}
                        />
                    ))}
                </Routes>
            <Footer/>
        </div>
    );
}