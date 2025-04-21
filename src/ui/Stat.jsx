import toPersianNumbersWithComma from "../utils/toPersianNumbers";

const colors = {
    primary: "bg-primary-100 text-primary-900",
    green: "bg-green-100 text-green-900",
    yellow: "bg-yellow-100 text-yellow-900",
    orange: "bg-orange-100 text-orange-900"
};

function Stat({ icon , title , value , color }) {
    return (
        <div className="col-span-1 grid grid-rows-2 grid-cols-[6.4rem_1fr] bg-secondary-0 p-4 rounded-lg gap-x-4">
            <div className={`row-span-2 flex items-center justify-center p-2 aspect-square rounded-full ${colors[color]} `}>
                {icon}
            </div>
            <h5 className="font-bold self-center  text-secondary-500 text-lg mb-1">{title}</h5>
            <p className="text-3xl font-bold text-secondary-900">{toPersianNumbersWithComma(value)}</p>
        </div>
    )
};
export default Stat;