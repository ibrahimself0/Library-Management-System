import {
    createContext,
    useContext,
    useEffect,
    useState,
    type ReactNode
} from "react";

interface LanguageContextType {
    lang: string;
    toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType>({} as unknown as LanguageContextType);

interface LanguageProviderProps {
    children: ReactNode;
}

export function LanguageProvider({
                                     children
                                 }: LanguageProviderProps) {

    const [lang, setLang] = useState<string>(() => {
        return localStorage.getItem("lang") || "en";
    });

    useEffect(() => {
        localStorage.setItem("lang", lang);

        document.documentElement.dir =
            lang === "ar" ? "rtl" : "ltr";
    }, [lang]);

    const toggleLang = () => {
        setLang((prev) =>
            prev === "en" ? "ar" : "en"
        );
    };

    return (
        <LanguageContext.Provider
            value={{ lang, toggleLang }}
        >
            {children}
        </LanguageContext.Provider>
    );
}

export function useLang() {

    const context = useContext(LanguageContext);

    if (!context) {
        throw new Error(
            "useLang must be used inside LanguageProvider"
        );
    }

    return context;
}