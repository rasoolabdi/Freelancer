import { HiArrowRightOnRectangle } from "react-icons/hi2";
import useLogout from "./useLogout";
import Loading from "../../ui/Loading";


function Logout() {
    const { isLogouting , logout } = useLogout();

    return (
        <div>
            {isLogouting ? (<Loading />) : (
                <button onClick={logout}>
                    <HiArrowRightOnRectangle className="w-6 h-6 text-primary-900 hover:text-error" />
                </button>
            )}
        </div>
    )
};
export default Logout;