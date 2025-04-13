import { TbPencilMinus } from "react-icons/tb";
import Table from "../../ui/Table";
import tolocalDateShort from "../../utils/toLocalDateShort";
import toPersianNumbersWithComma from "../../utils/toPersianNumbers";
import truncateText from "../../utils/truncateText";
import { HiOutlineTrash } from "react-icons/hi2";
import Modal from "../../ui/Modal";
import { useState } from "react";
import ConfirmDelete from "../../ui/ConfirmDelete";
import useRemoveProject from "./useRemoveProject";

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
                {project.status === "OPEN" ? (
                    <span className="badge badge--success">باز</span>
                ) : (
                    <span className="badge badge--danger">بسته</span>
                )}
            </td>   
            <td>
                <div className="flex items-center gap-x-4">
                    <>
                        <button onClick={() => setIsEditOpen(true)}>
                            <TbPencilMinus className="w-6 h-6 text-primary-900" />
                        </button>
                        <Modal
                            title={`ویرایش ${project.title}`}
                            open={isEditOpen}
                            onClose={() => setIsEditOpen(false)}
                        >
                            this is modal
                        </Modal>
                    </>
                    <>
                        <button onClick={() => setIsDeleteOpen(true)}>
                            <HiOutlineTrash className="w-6 h-6 text-rose-600" />
                        </button>
                        <Modal
                            title={`حذف ${project.title}`}
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
                </div>
            </td>
        </Table.Row>
    )
};
export default ProjectRow;