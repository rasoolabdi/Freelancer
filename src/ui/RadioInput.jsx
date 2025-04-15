function RadioInput({ name , id , value , onChange , label , register , validationSchema , watch , required }) {
    return (
        <div className="flex items-center gap-x-2 text-secondary-600">
            <input 
                type="radio"
                name={name} 
                id={id} 
                { ... register(name , validationSchema )}
                value={value}
                onChange={onChange}
                checked={watch(name) === value}
                className="cursor-pointer w-4 h-4 form-radio text-primary-900 focus:ring-green-500"
            />
            <label htmlFor={id}>
                {label}
                {required && <span className="text-error">*</span>}
            </label>
        </div>
    )
};
export default RadioInput;