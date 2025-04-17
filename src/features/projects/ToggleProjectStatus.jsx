import { Switch } from "@headlessui/react";
import { useState } from "react";
import useToggleProjectStatus from "./useToggleProjectStatus";
import Loading from "../../ui/Loading";
import Toggle from "../../ui/Toggle";


function ToggleProjectStatus({ project }) {
    // const [enabled, setEnabled] = useState(project.status === "OPEN" ? true : false);
    const enabled = project.status === "OPEN" ? true : false;
    const { isToggling , toggleProjectStatus } = useToggleProjectStatus();

    const toggleHandler = () => {
        const status = project.status === "OPEN" ? "CLOSED" : "OPEN";
        toggleProjectStatus({
            id: project._id,
            data: { status }
        } , {
            // onSuccess: () => {
            //     setEnabled((prev) => !prev)
            // }
        })
    }

    return (
        <div className="w-[5rem]">
            {isToggling ? (<p><Loading height={35} width={50} /></p>) : (
                <Toggle 
                    enabled={enabled} 
                    onChange={toggleHandler}
                    label={project.status ===  "OPEN" ? "باز" : "بسته"}
                />
            )}
        </div>
    )
};
export default ToggleProjectStatus;