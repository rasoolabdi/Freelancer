import TextField from "../../ui/TextField";
import Loading from "../../ui/Loading";

function SendOTPForm({ loading , onSubmit , register}) {

    return (
        <div>
            <form className="space-y-10" onSubmit={onSubmit}>
                <div>
                    <TextField 
                        name="phoneNumber"
                        type="text"
                        label="شماره موبایل"
                        register={register}
                        // value={phoneNumber}
                        // onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="example: 09101234567"                    
                    />
                </div>
                {loading ? (<p><Loading /></p>) : (
                    <button type="submit" className="btn btn--primary w-full">ارسال کد تایید</button>
                )}
            </form>
        </div>
    )
};
export default SendOTPForm; 