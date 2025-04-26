import { useSearchParams } from "react-router-dom";

function Filter({ filterField , options }) {
    const [searchParams , setSearchParams] = useSearchParams();
    const filterValue = searchParams.get(filterField) || options.at(0).value;

    const handleChange = (value) => {
        searchParams.set(filterField , value);
        setSearchParams(searchParams);
    }

    return (
        <div className="flex items-center gap-x-2 text-xs">
            <span>وضعیت</span>
            <div className="flex items-center gap-x-2 border border-secondary-100 bg-secondary-0 rounded-lg">
                {
                    options.map((item) => {
                        const isActive = item.value === filterValue;
                        return (<button 
                            disabled={isActive} 
                            onClick={() => handleChange(item.value)}
                            value={filterValue}
                            key={item.value} 
                            className={`whitespace-nowrap rounded-lg px-4 py-2 font-boldtransition-all duration-300 
                                hover:bg-primary-100 ${isActive ? "!bg-primary-900 text-white" 
                                : "bg-secondary-0 text-secondary-800"}
                            `}
                        >
                            {item.label}
                        </button>
                    )})
                }
            </div>
        </div>
    )
};
export default Filter;