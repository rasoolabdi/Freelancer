

function ConfirmDelete({ resourseName , onClose , onConfirm , disabled }) {

    return (
        <div>
            <h2 className="font-bold text-base mb-8">
                آیا از حذف پروژه <span className="font-bold text-2xl">{resourseName}</span> مطمئن هستید ؟
            </h2>
            <div className="flex justify-between items-center gap-x-16">
                <button 
                    className="btn btn--primary flex-1"
                    onClick={onClose}
                >
                    لغو
                </button>
                <button 
                    onClick={onConfirm}
                    disabled={disabled}
                    className="btn btn--danger flex-1 py-3"
                >
                    تایید
                </button>
            </div>
        </div>
    )
};
export default ConfirmDelete;