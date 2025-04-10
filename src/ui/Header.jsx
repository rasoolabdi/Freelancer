import useUser from "../features/authentication/useUser";


function Header() {
    const { isLoading , data } = useUser();
    
    return (
        <div className="bg-secondary-0 py-4 px-8">app header</div>
    )
};
export default Header;