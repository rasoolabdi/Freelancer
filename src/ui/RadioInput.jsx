

function RadioInput({ name , id , value , onChange , label , checked}) {

    return (
        <div className="flex items-center gap-x-2 text-secondary-600">
            <input 
                type="radio"
                name={name} 
                id={id} 
                value={value}
                onChange={onChange}
                checked={checked}
                className="cursor-pointer w-4 h-4 form-radio text-primary-900 focus:ring-green-500"
            />
            <label htmlFor={id}>{label}</label>
        </div>
    )
};
export default RadioInput;