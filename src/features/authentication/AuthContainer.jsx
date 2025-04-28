import { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import { getOTP } from "../../services/authService";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

function AuthContainer() {
    const [step , setStep] = useState(2);
    const [phoneNumber , setPhoneNumber] = useState("09101234567");
    const {register , handleSubmit , getValues} = useForm();

    const {isPending: loading , data:otpResponse , mutateAsync} = useMutation({
        mutationFn: getOTP
    })

    const sendOTPHandler = async (data) => {
        // e.preventDefault();
        try {
            const { message } = await mutateAsync({ phoneNumber });
            // const { message } = await mutateAsync(data);
            setStep(2);
            toast.success(message)
        }
        catch(error) {  
            toast.error(error?.response?.data?.message)
        }
    }


    const renderStep = () => {
        switch(step) {
            case 1: 
                return <SendOTPForm 
                            phoneNumber={phoneNumber} 
                            setPhoneNumber={setPhoneNumber} 
                            onSubmit={sendOTPHandler}
                            // onSubmit={handleSubmit(sendOTPHandler)}
                            loading={loading}
                            register={register}
                        />
            case 2: 
                return <CheckOTPForm 
                            phoneNumber={phoneNumber} 
                            // phoneNumber={getValues("phoneNumber")}
                            onBack={() => setStep(1)} 
                            onReSendOTP={handleSubmit(sendOTPHandler)}
                            otpResponse={otpResponse}
                            register={register}
                        />
            default: 
                return null;
        }
    }

    return (
        <div className="container xl:max-w-sm w-full">
            {renderStep()}
        </div>
    )
};
export default AuthContainer;