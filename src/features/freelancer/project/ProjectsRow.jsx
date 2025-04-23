import { MdAssignmentAdd } from "react-icons/md";
import Table from "../../../ui/Table";
import tolocalDateShort from "../../../utils/toLocalDateShort";
import toPersianNumbersWithComma from "../../../utils/toPersianNumbers";
import truncateText from "../../../utils/truncateText";
import { useState } from "react";
import Modal from "../../../ui/Modal";
import CreateProposal from "../../proposals/CreateProposal";

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
    const [open , setOpen] = useState(false);

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
                <button onClick={() => setOpen(true)}>
                    <MdAssignmentAdd className="w-6 h-6 text-primary-900" />
                </button>
                <Modal
                    title={`درخواست انجام پروژه ${project.title}`}
                    open={open}
                    onClose={() => setOpen(false)}
                >
                    <CreateProposal 
                        onClose={() => setOpen(false)} 
                        projectId={project._id}
                    />
                </Modal>
            </td>
        </Table.Row>
    )
};
export default ProjectsRow;