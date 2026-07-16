import { navigationLinks } from "./utils/links.tsx";
import { Route, Routes ,Navigate } from "react-router";
import {Navbar} from "./components/Navigation/Navbar.tsx";




function App() {

    const token =
        localStorage.getItem(
            "token"
        );
    console.log(token);

    if (!token) {
        return (
            <Routes>
                <Route path="/" element={<Navigate to="/login" replace />} />
                {navigationLinks.map((route) => {
                    if(route.noToken){
                        return (
                            <Route
                                key={route.id}
                                path={route.href}
                                element={route.element}
                            />
                        )
                    }
                    }

                )}
            </Routes>
        );
    }else{
        return (
            <div className="flex h-screen w-screen overflow-hidden">
                <div className="flex flex-1 flex-col">

                    <Navbar/>

                    <main className="flex-1 overflow-y-auto bg-[#F6F3F2] p-6">
                        <Routes>
                            <>
                                {navigationLinks.map((route) => (
                                    <Route
                                        key={route.id}
                                        path={route.href}
                                        element={route.element}
                                    />
                                ))}
                            </>
                        </Routes>
                    </main>
                </div>
            </div>
        );
    }

}

export default App;