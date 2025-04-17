import useSingleProject from "../features/project/useSingleProject";
import Loading from "../ui/Loading";
import Empty from "../ui/Empty";
import ProposalsTable from "../features/project/ProposalsTable";
import ProjectHeader from "../features/project/ProjectHeader";


function Project() {
    const { isLoading , project } = useSingleProject();
    if(isLoading) return <Loading />
    if(!project) return <Empty resourceName="پروژه مورد نظر" />
    console.log(project)
    return (
        <div>
            <ProjectHeader project={project} />
            <ProposalsTable proposals = {project.proposals} />
        </div>
    )
};
export default Project;
