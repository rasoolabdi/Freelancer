import { NavLink } from "react-router-dom";

function CustomNavLink({ children , to }) {
    const navlinkClass = "flex items-center gap-x-4 px-4 py-2 hover:bg-primary-100/50 hover:text-primary-900 rounded-lg transition-all duration-300 ";

    return (
        <li>
            <NavLink 
                to={to} 
                className={({ isActive }) => 
                    isActive ? `${navlinkClass} bg-primary-100/80 text-primary-900` : `${navlinkClass} text-secondary-600`
            }>
                { children }
            </NavLink>
        </li>
    )
};
export default CustomNavLink;