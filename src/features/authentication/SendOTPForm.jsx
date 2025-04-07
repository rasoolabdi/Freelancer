import { useState } from "react";
import TextField from "../../ui/TextField";

function SendOTPForm() {
    const [phoneNumber , setPhoneNumber] = useState("");

    return (
        <div>
            <form className="space-y-8">
                <div>
                    <TextField 
                        name="phoneNumber"
                        type="text"
                        label="شماره موبایل"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="example: 09101234567"                    
                    />
                </div>
                <button className="btn btn--primary w-full">ارسال کد تایید</button>
            </form>
        </div>
    )
};
export default SendOTPForm; 