import { HiOutlineCollection } from "react-icons/hi";
import { HiHome } from "react-icons/hi2";
import { NavLink } from "react-router-dom";


function Sidebar(){
    return (
        <div className="bg-secondary-50 row-start-1 row-span-2 border-l border-gray-200 p-4">
            <ul className="flex flex-col gap-y-4">
                <li>
                    <CustomNavLink to="/owner/dashboard">
                        <HiHome className="w-6 h-6" />
                        <span>خانه</span>
                    </CustomNavLink>
                </li>
                <li>
                    <CustomNavLink to="/owner/projects">
                        <HiOutlineCollection className="w-6 h-6" />
                        <span>پروژه ها</span>
                    </CustomNavLink>
                </li>
            </ul>
        </div>
    )
};
export default Sidebar;

export function CustomNavLink({ children , to }) {
    const navlinkClass = "flex items-center gap-x-4 px-4 py-2 hover:bg-primary-100/50 hover:text-primary-900 rounded-lg transition-all duration-300 ";

    return (
        <NavLink to={to} className={({ isActive }) => 
            isActive ? `${navlinkClass} bg-primary-100/80 text-primary-900` : `${navlinkClass} text-secondary-600`
        }>
            { children }
        </NavLink>
    )
}