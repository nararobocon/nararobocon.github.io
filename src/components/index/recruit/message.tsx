import Link from "next/link";
import "./arrow.css"
const Message = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center bg-pearl-100 text-dark-950">
            <div className="text-center">
                <div className="font-noto font-extrabold sm:text-5xl text-5xl md:text-7xl lg:text-7xl xl:text-7xl 2xl:text-7xl">
                    夢中になれる
                    <br></br>
                    それが
                    <span className="underline decoration-ruby-500">
                        ロボコン
                    </span>
                </div>
                <div className="m-3">
                    <Link href="/recruit/2024" className="p-3 text-azure-500 underline">2024年度 新卒採用 特設ページ</Link>
                </div>
                <div className="down-arrow"></div>
            </div>
        </div >
    )
}
export default Message;