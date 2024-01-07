const Voice = () => {
    return (
        <div className="flex items-center w-screen h-screen p-12 bg-pearl-100 text-dark-950" id="about">
            <div className="grid sm:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 flex-row items-center w-full h-full gap-3 ">
                <div className="flex flex-col gap-3 ps-6">
                    <div className="p-6 text-6xl underline ps-0 w-fit font-extrabold font-inter decoration-azure-500">Voice</div>
                    <p className="break-words">準備中...</p>
                </div>
                <div className="">
                    <div className="w-full h-full text-white shadow bg-dark-950 aspect-video rounded-xl"></div>
                </div>
            </div>
        </div>
    )
}
export default Voice;