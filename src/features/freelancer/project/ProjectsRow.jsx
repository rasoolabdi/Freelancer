import { MdAssignmentAdd } from "react-icons/md";
import Table from "../../../ui/Table";
import tolocalDateShort from "../../../utils/toLocalDateShort";
import toPersianNumbersWithComma from "../../../utils/toPersianNumbers";
import truncateText from "../../../utils/truncateText";

const projectStatus = {
    OPEN: {
        label: "باز",
        className: "badge--success"
    },
    CLOSED: {
        label: "بسته",
        className: "badge--danger"
    }
}

function ProjectsRow({ project , index }) {
    const status = project.status;

    return (
        <Table.Row>
            <td>{ index + 1 }</td>
            <td>{truncateText(project.title , 30)}</td>
            <td>{toPersianNumbersWithComma(project.budget)}</td>
            <td>{tolocalDateShort(project.deadline)}</td>
            <td>
                <span className={`badge ${projectStatus[status].className}`}>
                    {projectStatus[status].label}
                </span>
            </td>
            <td>
                <button>
                    <MdAssignmentAdd className="w-6 h-6 text-primary-900" />
                </button>
            </td>
        </Table.Row>
    )
};
export default ProjectsRow;