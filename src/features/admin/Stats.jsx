import { HiUsers } from "react-icons/hi2";
import Stat from "../../ui/Stat";
import { HiCollection, HiOutlineViewGrid } from "react-icons/hi";

function Stats({ projects , proposals , users}) {
    return (
        <div className="grid lg:grid-cols-3  sm:grid-cols-1 gap-8">
            <Stat 
                color="orange"
                title="کاربران"
                icon={<HiUsers className="w-20 h-20" />}
                value={users}
            />
            <Stat 
                color="primary"
                title="پروژه ها"
                icon={<HiCollection className="w-20 h-20" />}
                value={projects}
            />
            <Stat
                color="yellow"
                title="درخواست ها"
                icon={<HiOutlineViewGrid className="w-20 h-20" />}
                value={proposals}
            />
        </div>
    )
};
export default Stats;