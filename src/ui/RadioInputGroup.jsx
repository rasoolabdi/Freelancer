import RadioInput from "./RadioInput";

function RadioInputGroup({ register , watch , errors , configs}) {
    const {name , validationSchema = {} , options } = configs;

    return (
        <div>
            <div className="flex items-center justify-center gap-x-8">
                {options.map((option) => (
                    <RadioInput 
                        key={option.value}
                        label={option.label}
                        id={option.value}
                        value={option.value}
                        name={name}
                        watch={watch}
                        register={register}
                        required
                        validationSchema={validationSchema}
                        errors={errors}
                    />
                ))}
            </div>
            {errors && errors[name] && (
                <span className="text-error block text-sm mt-2 flex-1">
                    {errors[name]?.message}
                </span>
            )}
        </div>
    )
};
export default RadioInputGroup;