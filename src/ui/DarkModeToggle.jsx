import { HiOutlineSun } from "react-icons/hi";
import { useDarkMode } from "../context/DarkModeContext";
import { HiOutlineMoon } from "react-icons/hi";

function DarkModeToggle() {
    const { isDarkMode , toggleDarkMode } = useDarkMode();


    return (
        <button onClick={toggleDarkMode}>
            {isDarkMode ? (<HiOutlineSun className="w-6 h-6 text-primary-900" />) : (
                <HiOutlineMoon className="w-6 h-6 text-primary-900" />
            )}
        </button>
    )
};
export default DarkModeToggle;