import { useState } from "react";
import TextField from "../../ui/TextField";
import Loading from "../../ui/Loading";
import RadioInput from "../../ui/RadioInput";
import { useMutation } from "@tanstack/react-query";
import { completeProfile } from "../../services/authService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function CompleteProfileForm() {
    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [role , setRole] = useState("");
    const navigate = useNavigate();

    const {isPending: loading , mutateAsync} = useMutation({
        mutationFn: completeProfile
    });

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const { user , message } = await mutateAsync({name , email , role});
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
        <div className="flex justify-center pt-10">
            <div className="w-full sm:max-w-sm">
                <form onSubmit={handleSubmitForm} className="space-y-8">
                    <TextField 
                        label="نام و نام خانوادگی"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}

                    />
                    <TextField 
                        label="ایمیل"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="flex items-center justify-center gap-x-8">
                        <RadioInput 
                            label="کارفرما"
                            name="role"
                            id="OWNER"
                            checked={role === "OWNER"}
                            value="OWNER"
                            onChange={(e) => setRole(e.target.value)}
                        />
                        <RadioInput 
                            label="فریلنسر"
                            name="role"
                            id="FREELANCER"
                            checked={role === "FREELANCER"}
                            value="FREELANCER"
                            onChange={(e) => setRole(e.target.value)}
                        />
                    </div>
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