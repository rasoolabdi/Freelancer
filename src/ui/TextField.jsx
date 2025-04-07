function TextField({ name , value , placeholder , onChange , label , type="text" }) {
    return (
        <div>
            <label htmlFor={name} className="mb-2">{label}</label>
            <input 
                type={type} 
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="textField__input"
                autoComplete="off"
            />
        </div>
    )
};
export default TextField;