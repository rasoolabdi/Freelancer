import { useState } from "react";
import TextField from "../../ui/TextField";
import Loading from "../../ui/Loading";
import RadioInput from "../../ui/RadioInput";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import RadioInputGroup from "../../ui/RadioInputGroup";

function CompleteProfileForm() {
    const { register , handleSubmit , watch , formState: {errors} } = useForm();
    // const [name , setName] = useState("");
    // const [email , setEmail] = useState("");
    // const [role , setRole] = useState("");
    const navigate = useNavigate();

    const {isPending: loading , mutateAsync} = useMutation({
        mutationFn: completeProfile
    });

    const handleSubmitForm = async (data) => {
        // e.preventDefault();
        try {
            // const { user , message } = await mutateAsync({ name , email , role});
            const { user , message } = await mutateAsync(data);
            toast.success(message);
            if(user.status !== 2) {
                navigate("/");
                toast("پروفایل شما در انتظار تایید است" , { icon: '👏' });
                return;
            };
            if(user.role === "OWNER") return navigate("/owner");
            if(user.role === "FREELANCER") return navigate("/freelancer");
        }
        catch(error) {
            toast.error(error?.response?.data?.message);
        }
    }


    return (
        <div className="flex flex-wrap justify-center pt-10">
            <div className="w-full sm:max-w-sm">
                <form onSubmit={handleSubmit(handleSubmitForm)} className="space-y-8">
                    <TextField 
                        label="نام و نام خانوادگی"
                        name="name"
                        // value={name}
                        // onChange={(e) => setName(e.target.value)}
                        register={register}
                        required
                        errors={errors}
                        validationSchema={{
                            required: "لطفا نام و نام خانوادگی را وارد نمایید",
                            minLength: {
                                value: 3,
                                message: "نام و نام خانوادگی حداقل باید سه 3 کاراکتر باشد"
                            }
                        }}
                    />
                    <TextField
                        label="ایمیل"
                        name="email"
                        // value={email}
                        // onChange={(e) => setEmail(e.target.value)}
                        register={register}
                        required
                        errors={errors}
                        validationSchema={{
                            required: "لطفا ایمیل معتبر وارد نمایید",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "ایمیل معتبر نمی باشد"
                            }
                        }}
                    />
                    <RadioInputGroup
                        errors={errors}
                        register={register}
                        watch={watch}
                        configs={{
                            name: "role",
                            validationSchema: {required: "انتخاب نقش (role) الزامی است"},
                            options: [
                                {
                                    value: "OWNER",
                                    label: "کارفرما"
                                },
                                {
                                    value: "FREELANCER",
                                    label: "فریلنسر"
                                }
                            ]
                        }}
                    />
                    <div>
                        {loading ? (<p><Loading /></p>) : (
                            <button className="btn btn--primary w-full" type="submit">تایید پروفایل</button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    )
};
export default CompleteProfileForm;