
import { Metadata } from "next"
export const metadata: Metadata = {
    title: '自分の手で形にすること',
    description: '奈良高専ロボコンプロジェクトに参加する先輩のインタビューを紹介します。',
    icons: "/favicon.svg",
    metadataBase: new URL(process.env.METADATABASE_URL ?? "https://nararobocon.github.io"),
}
const Voice5 = () => {
    return (<>
        <div className="p-12 bg-ruby-500 text-white">
            <p>先輩の声 5</p>
            <div className="p-12 text-4xl font-extrabold">自分の手で形にする</div>
            <p className="text-end text-xl">2S 機械班</p>
        </div>
        <div className="p-12 w-full text-lg">
            <div className="p-6 ps-0"><span className="text-ruby-500 text-xl">Q</span>
                なぜロボコンを始めましたか？
            </div>
            <div className="w-fit  bg-white shadow rounded-xl p-6 m-3">
                同じクラスの人が入ると言っていたからです。
            </div>
            <div className="p-6 ps-0"><span className="text-ruby-500">Q</span>
                やりがいを感じることは何ですか？
            </div>
            <div className="w-fit  bg-white shadow rounded-xl p-6 m-3">
                勝つロボットを考え、自分の手でかたちにすることです。
            </div>
            <div className="p-6 ps-0"><span className="text-ruby-500">Q</span>
                部活の雰囲気はどのような感じですか？
            </div>
            <div className="w-fit  bg-white shadow rounded-xl p-6 m-3">
                仲良く機構を作っています。
            </div>
            <div className="p-6 ps-0"><span className="text-ruby-500">Q</span>
                部活をやっていて楽しいと感じることは？
            </div>
            <div className="w-fit  bg-white shadow rounded-xl p-6 m-3">
                完成した時、改良して良くなった時です。
            </div>
            <div className="p-6 ps-0"><span className="text-ruby-500">Q</span>
                部活をやっていて大変だと感じることは？
            </div>
            <div className="w-fit  bg-white shadow rounded-xl p-6 m-3">
                他校に負けた時のロボットの差を感じることです。
            </div>
        </div>
    </>
    )
}
export default Voice5