import { HiArrowRight } from "react-icons/hi";
import useMoveBack from "../../hooks/useMoveBack";

function ProjectHeader({ project }) {
    const moveBack = useMoveBack();

    return (
        <div className="flex items-center gap-x-4 mb-8">
            <button onClick={moveBack}>
                <HiArrowRight className="w-6 h-6 text-secondary-900" />
            </button>
            <h1 className="font-black text-secondary-700 text-xl">لیست درخواست های ارسال شده فریلنسرها برای پروژه { project.title}</h1>
        </div>
    )
};
export default ProjectHeader;