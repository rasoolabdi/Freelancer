import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import OTPInput from "react-otp-input";
import { checkOTP } from "../../services/authService";
import toast from "react-hot-toast";
import Loading from "../../ui/Loading";
import { useNavigate } from "react-router-dom";


function CheckOTPForm({ phoneNumber }) {
    const [otp , setOtp] = useState("");
    const navigate = useNavigate();

    const {isPending: loading , mutateAsync} = useMutation({
        mutationFn: checkOTP
    })

    const checkOTPHandler = async (e) => {
        e.preventDefault();
        try {
            const { message , user } = await mutateAsync({ phoneNumber , otp });
            toast.success(message);
            if(user.isActive) {
                if(user.role === "OWNER") {
                    navigate("/owner")
                }
                if(user.role === "FREELANCER") {
                    navigate("/freelancer")
                }
            }
            else {
                navigate("/complete-profile")
            }
        }
        catch(error) {
            toast.error(error?.response?.data?.message)
        }
    }

    return (
        <div>
            <form className="space-y-10" onSubmit={checkOTPHandler}>
                <p className="font-bold text-secondary-800">کد تایید را وارد نمایید</p>
                <OTPInput
                    value={otp}
                    numInputs={6}
                    onChange={setOtp}
                    renderSeparator={<span>-</span>}
                    renderInput={(props) => <input type="number" {...props} />}
                    containerStyle="flex flex-row-reverse gap-x-2 justify-center"
                    inputStyle={{
                        width: "3.5rem",
                        padding: "1rem 1rem",
                        border: "1px solid rgb(var(--color-primary-300))",
                        borderRadius: "0.5rem"
                    }}
                />
                <div>
                    {loading ? (<p><Loading /></p>) : (
                        <button className="btn btn--primary w-full"> ارسال کد تایید</button>
                    )}
                </div>
            </form>
        </div>
    )
};
export default CheckOTPForm;