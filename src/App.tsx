import { Routes, Route} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Navbar from "./components/Navigation/Navbar.tsx";
import "./index.css";
import Footer from "./components/Footer/Footer.tsx";
import Search from "./pages/Search.tsx";
import Categories from "./components/Categories/Categories.tsx";
import Library from "./pages/Library.tsx";
import Favorite from "./pages/Favorite.tsx";
export default function App() {
    return (
        <div>
            <Navbar/>

            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/search" element={<Search/>} />
                <Route path="/categories" element={<Categories/>} />
                <Route path="/library" element={<Library/>} />
                <Route path="/favorites" element={<Favorite/>} />
            </Routes>

            <Footer/>
        </div>
    );
}