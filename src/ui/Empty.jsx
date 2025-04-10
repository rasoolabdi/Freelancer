

function Empty({ resourceName }) {
    return (
        <div className="items-center bg-slate-200 border rounded-lg p-8 text-secondary-800">
            <p>{resourceName}{" "} وجود ندارد</p>
        </div>
    )
};
export default Empty;