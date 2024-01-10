const Supported = () => {
    return (
        <div className="min-h-screen bg-pearl-100 text-dark-950 w-full flex justify-center items-center flex-col">
            <div className="p-6 text-3xl underline w-fit font-extrabold font-inter decoration-azure-500">Supported By</div>
            <div className="p-12 grid gap-6  grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 2xl:grid-cols-6 justify-center items-center">
                <div className="w-full flex justify-center items-center">
                    <img src="/misumi.svg" alt="misumi" className=""></img>
                </div>
                <div className="w-full flex justify-center items-center">
                    <img src="/solidworks.svg" alt="solidworks"></img>
                </div>
                <div className="w-full flex justify-center items-center">
                    <img src="/stm.svg" alt="STMicroelectronics" className="h-24"></img>
                </div>
                <div className="h-fit w-full flex justify-center items-center">
                    <img src="/JLCPCB.webp" alt="jlcpcb"></img>
                </div>
                <div className="w-full flex-col flex justify-center items-center">
                    <img src="/esa.webp" alt="esa"></img>
                    <p>© esa LLC</p>
                </div>
                <div className="w-full flex justify-center items-center">
                    <img src="/mabuchi.svg" alt="mabuchi"></img>
                </div>
            </div>
            <p className="text-sm text-center p-6">ロゴマーク及び社名は各社の商標または登録商標です</p>
        </div>
    )
}
export default Supported