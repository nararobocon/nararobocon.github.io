const MachinePage = () => {
    return (
        <>
            <div className="relative">
                <div className="w-full flex flex-col items-center min-h-screen bg-machine bg-cover blur">
                </div>
                <div className="absolute top-0 left-0 font-noto font-extrabold flex h-full w-full  items-center">
                    <div className="p-12">
                        <span className="text-6xl lg:text-9xl underline decoration-ruby-500 font-inter font-extrabold">Machine</span>
                        <p className="font-noto lg:text-3xl p-3">機械班</p>
                    </div>
                </div>
            </div>
            <div className="w-full min-h-screen flex justify-center items-center">
                準備中...
            </div>
        </>
    )
}
export default MachinePage