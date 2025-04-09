import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import OTPInput from "react-otp-input";
import { checkOTP } from "../../services/authService";
import toast from "react-hot-toast";
import Loading from "../../ui/Loading";
import { useNavigate } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi2";
import { CiEdit } from "react-icons/ci";

const RESEND_TIME = 90;

function CheckOTPForm({ phoneNumber , onBack , onReSendOTP , otpResponse }) {
    const [otp , setOtp] = useState("");
    const [time , setTime] = useState(RESEND_TIME);
    const navigate = useNavigate();

    const {isPending: loading , mutateAsync} = useMutation({
        mutationFn: checkOTP
    })

    const checkOTPHandler = async (e) => {
        e.preventDefault();
        try {
            const { message , user } = await mutateAsync({ phoneNumber , otp });
            toast.success(message);
            if(!user.isActive) return navigate("/complete-profile");
            if(user.status !== 2) {
                navigate("/");
                toast("پروفایل شما در انتظار تایید است" , { icon: '👏' });
                return;
            };
            if(user.role === "OWNER") return navigate("/owner");
            if(user.role === "FREELANCER") return navigate("/freelancer");
        }
        catch(error) {
            toast.error(error?.response?.data?.message)
        }
    }

    useEffect(() => {
        const timer = time > 0 && setInterval(() => setTime((t) => t - 1) , 1000);

        return () => {
            if(timer) {
                clearInterval(timer)
            }
        }
    } , [time])

    return (
        <div>
            <button onClick={onBack} className="mb-4 flex gap-x-2">
                <HiArrowRight className="w-6 h-6 text-secondary-700 content-center" />
                <span className="bg-slate-200 border rounded-xl w-32 h-8 content-center">صفحه قبل</span>
            </button>
            <div className="mb-16">
                {time > 0 ? (<p className="bg-slate-200 border rounded-lg w-64 h-10 items-center content-center">{time} ثانیه تا ارسال مجدد کد تایید</p>) :  (
                    <button onClick={onReSendOTP} className="btn btn--primary w-full">ارسال مجدد کد تایید</button>
                )}
            </div>
            {otpResponse && (
                <p className="flex items-center gap-x-2">
                    <span>{otpResponse?.message}</span>
                    <button onClick={onBack}>
                        <CiEdit className="w-7 h-7 text-primary-900" />
                    </button>
                </p>
            )}

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
                        <button className="btn btn--primary w-full">تایید</button>
                    )}
                </div>
            </form>
        </div>
    )
};
export default CheckOTPForm;