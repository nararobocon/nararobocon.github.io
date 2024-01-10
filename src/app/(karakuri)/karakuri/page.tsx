import { MapPinIcon, CalendarIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: '奈良高専からくり部',
    description: 'NITNC Karakuri Club Official Site',
    icons: "/favicon.svg",
    metadataBase: new URL(process.env.METADATABASE_URL ?? "https://nararobocon.github.io/karakuri"),
}
const Karakuri = () => {
    return (
        <>
            <div className="w-full gap-6 min-h-screen text-banana-500 flex flex-col justify-center items-center">
                <div className="text-6xl font-extrabold">からくり部</div>
                <Link href={"/karakuri/relation"} className="text-sm text-white underline">ロボコンプロジェクトとの関係</Link>
            </div>
            <div className="w-full min-h-screen bg-pearl-100 text-dark-950 p-12 gap-3 grid grid-cols-1 lg:grid-cols-2 justify-center items-center">
                <div>
                    <div className="p-6 lg:text-6xl text-3xl underline lg:ps-0 w-fit font-extrabold font-inter decoration-banana-500">活動内容</div>
                    <p>からくり部は各種ロボコンへの参加を目的とした部活です。</p>
                    <p>ロボコンプロジェクトへの参加や、高専ロボコン終了後に関西春ロボコンなどに出場しています。</p>
                    <p>具体的な活動内容は<Link href={"/"} className="text-azure-500 underline">ロボコンプロジェクト</Link>のページをご覧ください。</p>
                </div>
                <img src="/harurobo.webp" alt="関西春ロボコン2024のフィールド" className="rounded-xl shadow-lg"></img>
            </div>
            <div className="w-full min-h-screen flex gap-6 flex-col justify-center items-center">
                <div className="p-6 text-6xl underline lg:ps-0 w-fit font-extrabold font-inter decoration-banana-500">活動場所/時間</div>
                <p className="flex items-center"><MapPinIcon className="h-5 w-5" />ものづくり工房 ゆめづくり工房 第二体育館</p>
                <p className="flex items-center"><CalendarIcon className="h-5 w-5" />週休2日(平日1日 日曜日)</p>
            </div>
        </>
    )
}
export default Karakuri;