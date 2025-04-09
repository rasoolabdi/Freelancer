import { HiArrowRight } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import useMoveBack from "../hooks/useMoveBack";

function NotFound() {
    const navigate = useNavigate();
    const moveBack = useMoveBack();

    return (
        <div className="sm:max-w-sm flex justify-center items-center pt-20">
            <div>
                <h1 className="text-xl font-bold text-secondary-700 mb-8">صفحه مورد نظر یافت نشد</h1>
                <button onClick={moveBack} className="flex items-center gap-x-4">
                    <HiArrowRight className="w-6 h-6 text-primary-900" />
                    <span>بازگشت به صفحه قبل</span>
                </button>
            </div>

        </div>
    )
};
export default NotFound;    