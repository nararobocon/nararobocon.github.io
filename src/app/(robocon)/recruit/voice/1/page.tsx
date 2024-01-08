import { Metadata } from "next"
export const metadata: Metadata = {
    title: 'やろうと思えば何でもできる環境',
    description: '奈良高専ロボコンプロジェクトに参加する先輩のインタビューを紹介します。',
    icons: "/favicon.svg",
    metadataBase: new URL(process.env.METADATABASE_URL ?? "https://nararobocon.github.io"),
}
const Voice1 = () => {
    return (
        <>
            <div className="p-12 bg-banana-500 text-white">
                <p>先輩の声 1</p>
                <div className="p-12 text-4xl font-extrabold">やろうと思えば何でもできる環境</div>
                <p className="text-end text-xl">1E 回路班<span className="text-xs"> ※2024/1現在</span></p>
            </div>
            <div className="p-12 w-full text-lg">
                <div className="p-6 ps-0"><span className="text-ruby-500 text-xl">Q</span>
                    なぜロボコンを始めましたか？
                </div>
                <div className="w-fit  bg-white shadow rounded-xl p-6 m-3">
                    なんとなく。誘われたわけでもロボコン目当てで高専に入ったわけでもない。バドミントン部に所属していた。ほんとになんとなく。
                </div>
                <div className="p-6 ps-0"><span className="text-ruby-500">Q</span>
                    やりがいを感じることは何ですか？
                </div>
                <div className="w-fit  bg-white shadow rounded-xl p-6 m-3">
                    回路が動いたとき。そして無事１日の練習が終わったとき。制御班からありがとうと言われたとき。
                </div>
                <div className="p-6 ps-0"><span className="text-ruby-500">Q</span>
                    部活の雰囲気はどのような感じですか？
                </div>
                <div className="w-fit  bg-white shadow rounded-xl p-6 m-3">
                    穏やか。やろうと思えばなんでもできる環境。
                </div>
                <div className="p-6 ps-0"><span className="text-ruby-500">Q</span>
                    部活をやっていて楽しいと感じることは？
                </div>
                <div className="w-fit  bg-white shadow rounded-xl p-6 m-3">
                    回路実装
                </div>
                <div className="p-6 ps-0"><span className="text-ruby-500">Q</span>
                    部活をやっていて大変だと感じることは？
                </div>
                <div className="w-fit  bg-white shadow rounded-xl p-6 m-3">
                    負けたとき。ほんとにこれに限る。敗因が自分なら尚更。
                </div>
            </div>
        </>
    )
}
export default Voice1