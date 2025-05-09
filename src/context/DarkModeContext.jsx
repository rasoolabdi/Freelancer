import { createContext, useContext, useEffect, useState } from "react";
import useLocalStorageState from "../hooks/useLocalStorageState";

const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
    const [isDarkMode , setIsDarkMode] = useLocalStorageState("DarkModeFreelancer" , 
        window.matchMedia("(prefers-color-schema: dark)").matches
    );
    const toggleDarkMode = () => setIsDarkMode((prev) => !prev);
    console.log(window.matchMedia("(prefers-color-scheme: dark)").matches)
    useEffect(() => {
        if(isDarkMode) {
            document.documentElement.classList.add("dark-mode");
            document.documentElement.classList.remove("light-mode")
        }
        else {
            document.documentElement.classList.add("light-mode");
            document.documentElement.classList.remove("dark-mode");
        }
    } , [isDarkMode]);

    return (
        <DarkModeContext.Provider value={{ isDarkMode , toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    )
};
export default DarkModeProvider;

export function useDarkMode() {
    const context = useContext(DarkModeContext);
    if(context === undefined) {
        throw new Error("DarkModeContext was used outside of DarkModeProvider");
    }
    return context;
};
