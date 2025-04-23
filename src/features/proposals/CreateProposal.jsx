import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import toast from "react-hot-toast";
import useAddProposal from "./useCreateProposal";
import useCreateProposal from "./useCreateProposal";
import Loading from "../../ui/Loading";


function CreateProposal({ onClose , projectId }) {
    const {register , handleSubmit , formState: {errors} } = useForm();
    const { isCreatingProposal , createProposal } = useCreateProposal();


    const onSubmit = (data) => {
        try {
            createProposal(
            {
                ... data,
                projectId    
            }, 
            {
                onSuccess: () => {
                    onClose()
                }
            }
        );
        }
        catch(error) {
            toast.error(error?.data?.response?.message)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <TextField 
                    label="عنوان"
                    name="description"
                    register={register}
                    required
                    errors={errors}
                    validationSchema={{
                        required: "لطفا عنوان درخواست را وارد نمایید",
                        minLength:{
                            value: 10,
                            message: "عنوان حداقل باید 10 کاراکتر باشد"
                        }
                    }}
                />
                <TextField 
                    label="قیمت پیشنهادی فریلنسر (تومان)"
                    name="price"
                    placeholder="12000000"
                    type="number"
                    register={register}
                    required
                    errors={errors}
                    validationSchema={{
                        required: "لطفا قیمت پیشهنادی خود را وارد نمایید",
                        minLength: {
                            value:5,
                            message: "قیمت حداقل باید 5 رقم باشد"
                        }
                    }}
                />
                <TextField 
                    label="مدت زمان پیشنهادی فریلنسر (روز)"
                    name="duration"
                    placeholder="120"
                    type="number"
                    register={register}
                    required
                    errors={errors}
                    validationSchema={{
                        required: "لطفا زمان پیشنهادی برای تحویل پروژه را وارد کنید"
                    }}
                />
                {isCreatingProposal ? (<Loading />) : (
                    <button type="submit" className="btn btn--primary w-full">تایید</button>
                )}
            </form>
        </div>
    )
};
export default CreateProposal;