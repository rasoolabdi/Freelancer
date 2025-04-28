import { HiOutlineViewGrid } from "react-icons/hi";
import { TbMoneybag } from "react-icons/tb";
import { GiConfirmed } from "react-icons/gi";
import Stat from "../../ui/Stat";

function Stats({ proposals }) {
    const numOfProposals = proposals.length;
    const acceptedProposals = proposals.filter((proposal) => proposal.status === 2);
    const balance = acceptedProposals.reduce((acc , curr) => curr.price + acc , 0);
    
    return (
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-x-8 mt-4">
            <Stat
                color="primary"
                title="درخواست ها"
                value={numOfProposals}
                icon={<HiOutlineViewGrid className="w-20 h-20" />}
            />
            <Stat 
                color="green"
                title="درخواست های تایید شده"
                value={acceptedProposals.length}
                icon={<GiConfirmed className="w-20 h-20"  />}
            />
            <Stat
                color="orange"
                title="کیف پول"
                value={balance}
                icon={<TbMoneybag className="w-20 h-20" />}
            />
        </div>
    )
};
export default Stats;