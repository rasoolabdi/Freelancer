import Empty from "../../ui/Empty";
import Loading from "../../ui/Loading";
import Table from "../../ui/Table";
import ProjectRow from "./ProjectRow";
import useOwnerProjects from "./useOwnerProjects";


function ProjectTable() {
    const { isLoading , data } = useOwnerProjects();
    const { projects } = data || {};
    if(isLoading) return <Loading />;
    if(!projects.length) return <Empty resourceName="پروژه ایی" />;

    return (
        <Table>
            <Table.Header>
                <th>#</th>
                <th>عنوان پروژه</th>
                <th>دسته بندی</th>
                <th>بودجه</th>
                <th>ددلاین</th>
                <th>تگ ها</th>
                <th>فریلنسر</th>
                <th>وضعیت</th>
                <th>عملیات</th>
            </Table.Header>
            <Table.Body>
            {projects.map((project , index) => (
                <ProjectRow project={project} index={index} key={project._id} />
            ))}
            </Table.Body>
        </Table>
    )
};
export default ProjectTable;    