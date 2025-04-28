import useProjects from "../../hooks/useProjects";
import DashboardHeader from "../../ui/DashboardHeader";
import Loading from "../../ui/Loading";
import useProposals from "../proposals/useProposals";
import Stats from "./Stats";
import useUsers from "./useUsers";

function DashboardLayout() {
    const { isLoading: loading1 , proposals } = useProposals();
    const { isLoading: loading2 , projects } = useProjects();
    const { isLoading: loading3 , users } = useUsers();

    if(loading1 || loading2 || loading3) return <Loading />;

    return (
        <div>
            <DashboardHeader />
            <Stats  
                projects={projects.length} 
                proposals={proposals.length} 
                users={users.length}
            />
        </div>
    )
};
export default DashboardLayout;