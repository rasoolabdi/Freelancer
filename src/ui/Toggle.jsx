import { Switch } from "@headlessui/react";


function Toggle({ label , enabled , onChange}) {
    return (
        <div className="flex items-center gap-x-2 ">
            <label>{label}</label>
            <Switch
                checked={enabled}
                onChange={onChange}
                className={`${enabled ? "bg-primary-900" : "bg-secondary-200"} group inline-flex h-6 w-11 items-center rounded-full bg-secondary-200 transition 
                data-[checked]:bg-primary-900`}
            >
                <span className={ `size-4 -translate-x-1 rounded-full bg-white transition group-data-[checked]:-translate-x-6` }/>
            </Switch>
        </div>
    )
};
export default Toggle;