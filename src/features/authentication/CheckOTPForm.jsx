import { useState } from "react";
import OTPInput from "react-otp-input";


function CheckOTPForm() {
    const [otp , setOtp] = useState("");
    return (
        <div>
            <form className="space-y-10">
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
                <button className="btn btn--primary w-full">تایید</button>
            </form>
        </div>
    )
};
export default CheckOTPForm;