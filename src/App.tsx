import { navigationLinks } from "./utils/links.tsx";
import { Route, Routes } from "react-router";
import Navbar from "./components/Navigation/Navbar.tsx";
import Register from "./pages/Register.tsx";


function App() {
    const token =
        localStorage.getItem(
            "token"
        );
    if (!token) {
        return (
            <Register/>
        );
    }
    return (
        <div className="flex h-screen w-screen overflow-hidden">

            <div className="flex flex-1 flex-col">
                <div className="flex h-16 items-center bg-cream px-6 text-white">
                    <Navbar/>
                </div>

                <main className="flex-1 overflow-y-auto bg-gray-400 p-6">
                    <Routes>
                        {navigationLinks.map((route) => (
                            <Route
                                key={route.id}
                                path={route.href}
                                element={route.element}
                            />
                        ))}
                    </Routes>
                </main>
            </div>
        </div>
    );
}

export default App;