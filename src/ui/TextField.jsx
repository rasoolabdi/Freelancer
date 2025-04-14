function TextField({ name , register , placeholder = ""  , label , type="text" , required , validationSchema , errors}) {
    console.log({... register(name)})
    return (
        <div>
            <label htmlFor={name} className="mb-2 block text-secondary-700">
                {label}
                {required && <span className="text-error">*</span>}
            </label>
            <input 
                type={type} 
                id={name}
                name={name}
                { ... register(name , validationSchema) }
                // value={value}
                // onChange={onChange}
                placeholder={placeholder}
                className="textField__input"
                autoComplete="off"
            />
            {errors && errors[name] && <span className="text-error block text-sm mt-2">{errors[name]?.message}</span>}
        </div>
    )
};
export default TextField;