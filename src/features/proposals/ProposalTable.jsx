import Empty from "../../ui/Empty";
import Loading from "../../ui/Loading";
import Table from "../../ui/Table";
import ProposalRow from "./ProposalRow";
import useProposals from "./useProposals";


function ProposalTable() {
    const { isLoading , proposals } = useProposals();

    if(isLoading) return <Loading />;
    if(!proposals.length) return <Empty resourceName="هیچ پروپوزالی " />

    return (
        <Table>
            <Table.Header>
                <th>#</th>
                <th>توضیحات</th>
                <th>زمان تحویل</th>
                <th>هزینه</th>
                <th>وضعیت</th>
            </Table.Header>
            <Table.Body>
                {proposals.map((proposal , index) => (
                    <ProposalRow  proposal={proposal} index={index} key={proposal._id} />
                ))}
            </Table.Body>
        </Table>
    )
};
export default ProposalTable;