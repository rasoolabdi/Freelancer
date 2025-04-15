import { useForm } from "react-hook-form";
import TextField from "../../ui/TextField";
import RHFSelect from "../../pages/RHFSelect";
import { useState } from "react";
import { TagsInput } from "react-tag-input-component";
import DatePickerField from "../../ui/DatePickerField";


function CreateProjectForm() {
    const {register , formState: {errors} , handleSubmit } = useForm();
    const [tags , setTags] = useState([]);
    const [date , setDate] = useState(new Date());

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <TextField 
                label="عنوان پروژه"
                name="title"
                register={register}
                required
                errors={errors}
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
            />
            <TextField 
                label=" توضیحات پروژه"
                name="description"
                register={register}
                required
                errors={errors}
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
            />
            <TextField 
                label="بودجه پیشنهادی کارفرما"
                name="budget"
                register={register}
                errors={errors}
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
            />
            <RHFSelect 
                label="دسته بندی"
                name="category"
                register={register}
                required
                options={[]}
            />
            <div>
                <label htmlFor="tags">
                    تگ های پروژه
                    <span className="text-error">*</span>
                </label>
                <TagsInput 
                    name="tags"
                    value={tags}
                    onChange={setTags}  
                />
            </div>
            <div>
                <DatePickerField  
                    date={date}
                    setDate={setDate}
                    label="ددلاین (زمان تحویل پروژه)"
                />
            </div>
            <button className="btn btn--primary w-full" type="submit">تایید</button>
        </form>
    )
};
export default CreateProjectForm;