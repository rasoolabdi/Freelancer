function Sidebar({ children }){
    return (
        <div className="bg-secondary-50 row-start-1 row-span-2 border-l border-gray-200 p-4">
            <ul className="flex flex-col gap-y-4">
                { children }
                {/* <li>
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
                </li> */}
            </ul>
        </div>
    )
};
export default Sidebar;
