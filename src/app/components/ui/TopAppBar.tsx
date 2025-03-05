

const TopAppBar = ({
    title,
    onBackPress
}: {
    title: string,
    onBackPress?: () => void
}) => {
    return (
        <div className="bg-white h-16 z-10 w-full top-0 flex items-center justify-start sticky p-4 shadow-md">
            <button onClick={onBackPress} className="text-black text-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
            </button>
            <h1 className="text-xl ps-4">{title}</h1>
        </div>
    );
}


export default TopAppBar