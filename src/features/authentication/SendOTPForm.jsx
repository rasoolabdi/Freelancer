import { useState } from "react";

function SendOTPForm() {
    const [phoneNumber , setPhoneNumber] = useState("");

    return (
        <div>
            <form className="space-y-8">
                <div>
                    <label htmlFor="phoneNumber" className="mb-1">شماره موبایل</label>
                    <input 
                        type="text" 
                        id="phoneNumber"
                        name="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="w-full py-3 px-4 rounded-xl text-secondary-900 border border-gray-300 
                            hover:border-primary-300 focus:border-primary-500 focus:shadow-lg focus:shadow-primary-200 focus:bg-white 
                            transition-all duration-300 ease-in-out"
                    />
                </div>
                <button className="btn btn--primary w-full">ارسال کد تایید</button>
            </form>
        </div>
    )
};
export default SendOTPForm; 