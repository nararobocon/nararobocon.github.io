import { Metadata } from "next"
export const metadata: Metadata = {
    title: '自分の設計したものが出来上がる',
    description: '奈良高専ロボコンプロジェクトに参加する先輩のインタビューを紹介します。',
    icons: "/favicon.svg",
    metadataBase: new URL(process.env.METADATABASE_URL ?? "https://nararobocon.github.io"),
}
const Voice7 = () => {
    return (
        <>
            <div className="p-12 bg-banana-500 text-white">
                <p>先輩の声 1</p>
                <div className="p-12 text-4xl font-extrabold">自分の設計したものが出来上がる</div>
                <p className="text-end text-xl">1E 回路班<span className="text-xs"> ※2024/1現在</span></p>
            </div>
            <div className="p-12 w-full text-lg">
                <div className="p-6 ps-0"><span className="text-ruby-500 text-xl">Q</span>
                    なぜロボコンを始めましたか？
                </div>
                <div className="w-fit  bg-white shadow rounded-xl p-6 m-3">
                    自分で基板を制作できるようになりたいとおもったです。

                </div>
                <div className="p-6 ps-0"><span className="text-ruby-500">Q</span>
                    やりがいを感じることは何ですか？
                </div>
                <div className="w-fit  bg-white shadow rounded-xl p-6 m-3">
                    綺麗に配線できたり、基板やマシンが実際に動いたとき

                </div>
                <div className="p-6 ps-0"><span className="text-ruby-500">Q</span>
                    部活の雰囲気はどのような感じですか？
                </div>
                <div className="w-fit  bg-white shadow rounded-xl p-6 m-3">
                    どうすればより良い仕組みなどが議論しやすい雰囲気です。

                </div>
                <div className="p-6 ps-0"><span className="text-ruby-500">Q</span>
                    部活をやっていて楽しいと感じることは？
                </div>
                <div className="w-fit  bg-white shadow rounded-xl p-6 m-3">
                    実際に自分の設計したものが出来上がることです。

                </div>
                <div className="p-6 ps-0"><span className="text-ruby-500">Q</span>
                    部活をやっていて大変だと感じることは？
                </div>
                <div className="w-fit  bg-white shadow rounded-xl p-6 m-3">
                    動かなかったりする際に原因や対策法がわからない時です。

                </div>
            </div>
        </>
    )
}
export default Voice7