import useUser from "./useUser";

function UserAvatar() {
    const { isLoading , user } = useUser();

    return (
        <div className="flex items-center gap-x-2 text-secondary-600">
            <img src="/user.jpg" alt="user img" className="w-8 h-8 rounded-full object-cover object-center" />
            <span>{user?.name}</span>
        </div>
    )
};
export default UserAvatar;