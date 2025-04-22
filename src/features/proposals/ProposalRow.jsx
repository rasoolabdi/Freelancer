import Table from "../../ui/Table";
import toPersianNumbersWithComma, { toPersianNumbers } from "../../utils/toPersianNumbers";
import truncateText from "../../utils/truncateText";

const statusProposals = [
    {
        label: "رد شده",
        className: "badge--danger"
    },
    {
        label: "در انتظار تایید",
        className: "badge--secondary"
    },
    {
        label: "تایید شده",
        className: "badge--success"
    }
];

function ProposalRow({ proposal , index}) {
    const status = proposal.status;

    return (
        <Table.Row>
            <td>{ index + 1 }</td>
            <td>{truncateText(proposal.description , 50)}</td>
            <td>{toPersianNumbers(proposal.duration)} روز</td>
            <td>{toPersianNumbersWithComma(proposal.price)} تومان</td>
            <td>
                <span className={`badge ${statusProposals[status].className}`}>
                    {statusProposals[status].label}
                </span>
            </td>
        </Table.Row>
    )
};
export default ProposalRow;