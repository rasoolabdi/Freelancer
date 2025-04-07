import { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";

function AuthContainer() {
    const [step , setStep] = useState(2);
    const [phoneNumber , setPhoneNumber] = useState("09101234567");


    const renderStep = () => {
        switch(step) {
            case 1: 
                return <SendOTPForm setStep={setStep} phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} />
            case 2: 
                return <CheckOTPForm setStep={setStep} phoneNumber={phoneNumber} />
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