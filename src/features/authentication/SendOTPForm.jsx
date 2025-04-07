import TextField from "../../ui/TextField";
import { useMutation } from "@tanstack/react-query";
import { getOTP } from "../../services/authService";
import toast from "react-hot-toast";
import Loading from "../../ui/Loading";

function SendOTPForm({ setStep , phoneNumber , setPhoneNumber }) {

    const {isPending: loading  , mutateAsync} = useMutation({
        mutationFn: getOTP
    })

    const sendOTPHandler = async (e) => {
        e.preventDefault();
        try {
            const { message } = await mutateAsync({ phoneNumber });
            setStep(2);
            toast.success(message)
        }
        catch(error) {  
            toast.error(error?.response?.data?.message)
        }
    }

    return (
        <div>
            <form className="space-y-10" onSubmit={sendOTPHandler}>
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
                {loading ? (<p><Loading /></p>) : (
                    <button type="submit" className="btn btn--primary w-full">ارسال</button>
                )}
            </form>
        </div>
    )
};
export default SendOTPForm; 