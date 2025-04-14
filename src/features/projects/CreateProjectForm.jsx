import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";


function CreateProjectForm() {
    const {register , formState: {errors} , handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log("dd" , data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <TextField 
                label="عنوان پروژه"
                name="title"
                register={register}
                required
                validationSchema={{
                    required: "لطفا عنوان پروژه را وارد نمایید",
                    minLength: {
                        value: 5,
                        message: "طول عنوان پروژه کمتر از پنج کاراکتر نباشد"
                    },
                    maxLength: {
                        value: 20,
                        message: "طول عنوان پروژه بیشتر از بیست کاراکتر نباشد"
                    }
                }}
                errors={errors}
            />
            <TextField 
                label=" توضیحات پروژه"
                name="description"
                register={register}
                required
                validationSchema={{
                    required: "لطفا توضیحات پروژه را وارد نمایید",
                    minLength: {
                        value: 10,
                        message: " توضیحات پروژه کمتر از ده کاراکتر نباشد"
                    },
                    maxLength: {
                        value: 50,
                        message: "توضیحات پروژه بیشتر از پنجاه کاراکتر نباشد"
                    }
                }}
                errors={errors}
            />
            <TextField 
                label="بودجه پیشنهادی کارفرما"
                name="budget"
                register={register}
                required
                validationSchema={{
                    required: "لطفا بودجه پیشنهادی خود را وارد نمایید",
                    minLength: {
                        value: 5,
                        message: "رقم بودجه کمتر از 5 پنج عدد نباشد"
                    },
                    maxLength: {
                        value: 15,
                        message: "رقم بودجه بیشتر از پانزده عدد نباشد"
                    }
                }}
                errors={errors}
            />
            <button className="btn btn--primary w-full" type="submit">تایید</button>
        </form>
    )
};
export default CreateProjectForm;