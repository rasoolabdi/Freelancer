import { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";

function AuthContainer() {
    const [step , setStep] = useState(1);

    const renderStep = () => {
        switch(step) {
            case 1: 
                return <SendOTPForm setStep={setStep} />
            case 2: 
                return <CheckOTPForm setStep={setStep} />
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