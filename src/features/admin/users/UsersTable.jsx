import Empty from "../../../ui/Empty";
import Loading from "../../../ui/Loading";
import Table from "../../../ui/Table";
import useUsers from "../useUsers";
import UsersRow from "./UsersRow";


function UsersTable() {
    const { isLoading , users } = useUsers();
    if(isLoading) return <Loading />;
    if(!users) return <Empty resourceName="هیچ کاربری" />

    return (
        <Table>
            <Table.Header>
                <th>#</th>
                <th>نام</th>
                <th>ایمیل</th>
                <th>شماره موبایل</th>
                <th>نقش</th>
                <th>وضعیت</th>
                <th>عملیات</th>
            </Table.Header>
            <Table.Body>
                {users.map((user , index) => (
                    <UsersRow user={user} index={index} key={user._id} />
                ))}
            </Table.Body>
        </Table>
    )
};
export default UsersTable;