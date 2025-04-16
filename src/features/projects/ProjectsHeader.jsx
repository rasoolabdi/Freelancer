import { useState } from "react";
import Modal from "../../ui/Modal";
import CreateProjectForm from "./CreateProjectForm";
import { HiPlusCircle } from "react-icons/hi";

function ProjectsHeader() {
    const [open , setOpen] = useState(false);

    return (
        <div className="flex items-center justify-between mb-8 xl: w-full">
            <span className="font-black text-secondary-700 text-xl">پروژه های شما :</span>
            <button className="btn btn--primary w-[12rem] flex items-center gap-x-2" onClick={() => setOpen(true)}>
                <HiPlusCircle  className="w-5 h-5 text-white" />
                <span>افزودن پروژه جدید</span>
            </button>
            <Modal
                title="اضافه کردن پروژه جدید"
                open={open}
                onClose={() => setOpen(false)}
            >   
                <CreateProjectForm onClose={() => setOpen(false)} />
            </Modal>
        </div>
    )
};
export default ProjectsHeader;