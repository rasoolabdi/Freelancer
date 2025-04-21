import { HiHome } from "react-icons/hi2";
import AppLayout from "../../ui/AppLayout";
import CustomNavLink from "../../ui/CustomNavLink";
import Sidebar from "../../ui/Sidebar";
import { HiCollection } from "react-icons/hi";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";

function FreelancerLayout() {
    return (
        <AppLayout>
            <Sidebar>
                <CustomNavLink to="dashboard">
                    <HiHome />
                    <span>داشبورد</span>
                </CustomNavLink>
                <CustomNavLink to="projects">
                    <HiCollection />
                    <span>پروژه های کارفرما</span>
                </CustomNavLink>
                <CustomNavLink to="proposals">
                    <VscGitPullRequestGoToChanges className="w-5 h-5 border-s-secondary-900 text-secondary-900" />
                    <span>درخواست های من</span>
                </CustomNavLink>
            </Sidebar>
        </AppLayout>
    )
};
export default FreelancerLayout;