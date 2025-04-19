import { HiHome } from "react-icons/hi2";
import AppLayout from "../../ui/AppLayout";
import CustomNavLink from "../../ui/CustomNavLink";
import Sidebar from "../../ui/Sidebar";
import { HiCollection } from "react-icons/hi";

function OwnerLayout() {
    return (
        <AppLayout>
            <Sidebar>
                <CustomNavLink to="/owner/dashboard">
                    <HiHome  />
                    <span>داشبورد</span>
                </CustomNavLink>
                <CustomNavLink to="/owner/projects">
                    <HiCollection />
                    <span>پروژه ها</span>
                </CustomNavLink>
            </Sidebar>
        </AppLayout>
    )
};
export default OwnerLayout;