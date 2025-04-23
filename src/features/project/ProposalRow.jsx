import { useState } from "react";
import Table from "../../ui/Table";
import toPersianNumbersWithComma from "../../utils/toPersianNumbers";
import truncateText from "../../utils/truncateText";
import Modal from "../../ui/Modal";
import ChangeProposalStatus from "./ChangeProposalStatus";

const styleStatus = [
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
]

function ProposalRow({ proposal , index }) {
    const status = proposal.status;
    const [open , setOpen] = useState(false);

    return (
        <Table.Row>
            <td>{index + 1}</td>
            <td>{proposal.user.name}</td>
            <td>
                <p>
                    {truncateText(proposal.description , 40)}
                </p>
            </td>   
            <td>{proposal.duration} روز</td>
            <td>{toPersianNumbersWithComma(proposal.price)} تومان</td>
            <td>
                <span className={`badge ${styleStatus[status].className}`}>
                    {styleStatus[status].label}
                </span>
            </td>
            <td>
                <button onClick={() => setOpen(true)} className="btn btn--primary">
                    تغییر وضعیت
                </button>
                <Modal
                    title="تغییر وضعیت درخواست فریلنسر"
                    open={open}
                    onClose={() => setOpen(false)}
                >
                    <ChangeProposalStatus onClose={() => setOpen(false)} proposalId={proposal._id} />
                </Modal>
            </td>
        </Table.Row>
    )
};
export default ProposalRow;