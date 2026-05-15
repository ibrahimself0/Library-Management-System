import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import {LanguageProvider} from "./contexts/LanguageProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <LanguageProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </LanguageProvider>
);