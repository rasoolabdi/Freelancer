import { HiHome, HiPresentationChartBar } from "react-icons/hi2";
import AppLayout from "../../ui/AppLayout";
import Sidebar from "../../ui/Sidebar";
import { HiCollection, HiUsers } from "react-icons/hi";
import CustomNavLink from "../../ui/CustomNavLink";


function AdminLayout() {
    return (
        <AppLayout>
            <Sidebar>
                <CustomNavLink to="dashboard">
                    <HiHome className="w-5 h-5" />
                    <span>داشبورد</span>
                </CustomNavLink>
                <CustomNavLink to="users">
                    <HiUsers className="w-5 h-5" />
                    <span>کاربران</span>
                </CustomNavLink>
                <CustomNavLink to="projects">
                    <HiPresentationChartBar className="w-5 h-5" />
                    <span>پروژه ها</span>
                </CustomNavLink>
                <CustomNavLink to="proposals">
                    <HiCollection className="w-5 h-5" />
                    <span>درخواست ها</span>
                </CustomNavLink>
            </Sidebar>
        </AppLayout>
    )
};
export default AdminLayout;