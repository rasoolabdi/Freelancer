import useProjects from "../../../hooks/useProjects";
import Empty from "../../../ui/Empty";
import Loading from "../../../ui/Loading";
import Table from "../../../ui/Table";
import ProjectsRow from "./ProjectsRow";

function ProjectsTable() {
    const { isLoading , projects } = useProjects();
    
    if(isLoading) return <Loading />
    if(!projects.length) return <Empty resourceName="هیچ پروژه ایی" />
    
    return (
       <Table>
            <Table.Header>
                <th>#</th>
                <th>عنوان پروژه</th>
                <th>بودجه</th>
                <th>ددلاین(زمان تحویل)</th>
                <th>وضعیت</th>
                <th>عملیات</th>
            </Table.Header>
            <Table.Body>
                {projects.map((project , index) => (
                    <ProjectsRow project={project} index={index} key={project._id} />
                ))}
            </Table.Body>
       </Table>
    )
};
export default ProjectsTable;