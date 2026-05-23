import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import {LanguageProvider} from "./contexts/LanguageProvider.tsx";
import "./index.css"
import {
    QueryClient,
    QueryClientProvider
} from "@tanstack/react-query";
const queryClient =
    new QueryClient({

        defaultOptions: {

            queries: {

                retry: 1,

                staleTime:
                    1000 * 60 * 5,

                refetchOnWindowFocus:
                    false

            }

        }

    });
ReactDOM.createRoot(document.getElementById("root")!).render(
    <QueryClientProvider
        client={queryClient}
    >
        <LanguageProvider>

            <BrowserRouter>
                <App />
            </BrowserRouter>
        </LanguageProvider>
    </QueryClientProvider>
);