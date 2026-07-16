import { navigationLinks } from "./utils/links.tsx";
import { Route, Routes ,Navigate } from "react-router";
import {Navbar} from "./components/Navigation/Navbar.tsx";



function App() {
    const token = localStorage.getItem("token");

    localStorage.setItem(
        "token",
        "1|qn7ofoXlfaZ7zDadLI5gZS4p7J5zPk7qbvaDIcLn08c0c1b8"
    );

    if (!token) {
        return (
            <Routes>
                <Route path="/" element={<Navigate to="/login" replace />} />

                {navigationLinks.map((route) => {
                    if (route.noToken) {
                        return (
                            <Route
                                key={route.id}
                                path={route.href}
                                element={route.element}
                            />
                        );
                    }
                })}
            </Routes>
        );
    }

    return (
        <div className="flex h-screen w-full overflow-hidden">
            <div className="flex flex-1 flex-col min-w-0">

                <Navbar />

                <main className="flex-1 overflow-y-auto overflow-x-hidden bg-[#F6F3F2] p-6">
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