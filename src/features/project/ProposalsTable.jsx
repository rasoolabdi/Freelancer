import Empty from "../../ui/Empty";
import Table from "../../ui/Table";
import ProposalRow from "./ProposalRow";


function ProposalsTable({ proposals }) {
    if(!proposals.length) return <Empty resourceName="پروپوزالی ( درخواستی )برای این پروژه" />

    return(
        <Table>
            <Table.Header>
                <th>#</th>
                <th>فریلنسر</th>
                <th>توضیحات</th>
                <th>زمان تحویل</th>
                <th>هزینه پیشنهادی فریلنسر</th>
                <th>وضعیت</th>
                <th>عملیات</th>
            </Table.Header>
            <Table.Body>
                {proposals.map((proposal , index) => (
                    <ProposalRow proposal={proposal} index={index} key={proposal._id} />
                ))}
            </Table.Body>
        </Table>
    )
};
export default ProposalsTable;