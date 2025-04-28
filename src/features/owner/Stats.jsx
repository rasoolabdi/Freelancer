import { HiCollection, HiOutlineViewGrid } from "react-icons/hi";
import { HiCurrencyDollar } from "react-icons/hi2";
import Stat from "../../ui/Stat";

function Stats({ projects }) {
    const numOfProjects = projects.length;
    const numOfAcceptedProjects = projects.filter((project) => project.status === 2).length;
    const numofProposals = projects.reduce((acc , curr) => curr.proposals.length + acc , 0 );
    console.log(projects);

    return (
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-x-8 mt-4">
            <Stat
                color="primary"
                title="همه پروژه ها"
                value={numOfProjects}
                icon={ <HiOutlineViewGrid className="w-20 h-20" /> }
            />
            <Stat 
                color="green"
                title="پروژه های واگذار شده به فریلنسرها"
                value={numOfAcceptedProjects}
                icon={<HiCurrencyDollar className="w-20 h-20" />}
            />
            <Stat 
                color="yellow"
                title="تعداد کل درخواست ها"
                value={numofProposals}
                icon={<HiCollection className="w-20 h-20" />}
            />
        </div>
    )
};
export default Stats;