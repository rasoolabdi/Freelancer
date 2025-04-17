import { TbPencilMinus } from "react-icons/tb";
import Table from "../../ui/Table";
import tolocalDateShort from "../../utils/toLocalDateShort";
import toPersianNumbersWithComma from "../../utils/toPersianNumbers";
import truncateText from "../../utils/truncateText";
import { HiEye, HiOutlineTrash } from "react-icons/hi2";
import Modal from "../../ui/Modal";
import { useState } from "react";
import ConfirmDelete from "../../ui/ConfirmDelete";
import useRemoveProject from "./useRemoveProject";
import CreateProjectForm from "./CreateProjectForm";
import ToggleProjectStatus from "./ToggleProjectStatus";
import { Link } from "react-router-dom";

function ProjectRow({ project , index }) {
    const [isEditOpen , setIsEditOpen] = useState(false);
    const [isDeleteOpen , setIsDeleteOpen] = useState(false);
    const { removeProject , isDeleting } = useRemoveProject();


    return (
        <Table.Row key={project._id}>
            <td>{index + 1}</td>
            <td>{truncateText(project.title , 30)}</td>
            <td>{project.category.title}</td>
            <td>{toPersianNumbersWithComma(project.budget)}</td>
            <td>{tolocalDateShort(project.deadline)}</td>
            <td>
                <div className="flex flex-wrap items-center gap-2 max-w-[200px]">
                    {project.tags.map((tag) => (
                        <span className="badge badge--secondary" key={tag}>{tag}</span>
                    ))}
                </div>
            </td>
            <td>{project.freelancer?.name || "-"}</td>
            <td>
                <ToggleProjectStatus project={project} />
                {/* {project.status === "OPEN" ? (
                    <span className="badge badge--success">باز</span>
                ) : (
                    <span className="badge badge--danger">بسته</span>
                )} */}
            </td>   
            <td>
                <div className="flex items-center gap-x-4">
                    <>
                        <button onClick={() => setIsEditOpen(true)}>
                            <TbPencilMinus className="w-6 h-6 text-primary-900" />
                        </button>
                        <Modal
                            title={`ویرایش پروژه  ${project.title}`}
                            open={isEditOpen}
                            onClose={() => setIsEditOpen(false)}
                        >
                            <CreateProjectForm 
                                onClose={() => setIsEditOpen(false)} 
                                projectToEdit={project}
                            />
                        </Modal>
                    </>
                    <>
                        <button onClick={() => setIsDeleteOpen(true)}>
                            <HiOutlineTrash className="w-6 h-6 text-rose-600" />
                        </button>
                        <Modal
                            title={`حذف پروژه ${project.title}`}
                            open={isDeleteOpen}
                            onClose={() => setIsDeleteOpen(false)}
                        >
                            <ConfirmDelete 
                                resourseName={project.title}
                                onClose={() => setIsDeleteOpen(false)}
                                onConfirm={() => {removeProject(project._id , {
                                    onSuccess: () => setIsDeleteOpen(false)
                                })}}
                                disabled={false}
                            />
                        </Modal>
                    </>
                   <td>
                        <Link to={project._id} className="flex justify-center content-center">
                            <HiEye className="w-6 h-6 text-primary-800" />
                        </Link>
                    </td>
                </div>
            </td>
        </Table.Row>
    )
};
export default ProjectRow;