import { useForm } from "react-hook-form";
import RHFSelect from "../../../pages/RHFSelect";
import useChangeUserStatus from "./useChangeUserStatus";
import { useQueryClient } from "@tanstack/react-query";
import Loading from "../../../ui/Loading";

const options = [
    {
        label: "رد شده",
        value: 0
    },
    {
        label: "در انتظار تایید",
        value: 1
    },
    {
        label: "تایید شده",
        value: 2
    }
];

function ChangeUserStatus({ userId , onClose }) {
    const {register , handleSubmit } = useForm();
    const { isChanging , changeUserStatus } = useChangeUserStatus();
    const queryClient = useQueryClient();

    const onSubmit = (data) => {
        changeUserStatus(
            {userId , data},
            {
                onSuccess: () => {
                    onClose();
                    queryClient.invalidateQueries({queryKey: ['users']});
                }
            }
        );
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <RHFSelect 
                    label="تغییر وضعیت کاربر"
                    name="status"
                    register={register}
                    required
                    options={options}
                />
                <div>
                    {isChanging ? (<Loading />) : (
                        <button type="submit" className="btn btn--primary w-full">تایید</button>
                    )}
                </div>
            </form>
        </div>
    )
};
export default ChangeUserStatus;