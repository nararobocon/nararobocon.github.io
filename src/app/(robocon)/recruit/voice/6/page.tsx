import { Metadata } from "next"
export const metadata: Metadata = {
    title: 'やるときはちゃんとやる',
    description: '奈良高専ロボコンプロジェクトに参加する先輩のインタビューを紹介します。',
    icons: "/favicon.svg",
    metadataBase: new URL(process.env.METADATABASE_URL ?? "https://nararobocon.github.io"),
}
const Voice6 = () => {
    return (
        <>
            <div className="p-12 bg-azure-500 text-white">
                <p>先輩の声 3</p>
                <div className="p-12 text-4xl font-extrabold">やるときはちゃんとやる</div>
                <p className="text-end text-xl">2I 制御班<span className="text-xs"> ※2024/1現在</span></p>
            </div>
            <div className="p-12 w-full text-lg">
                <div className="p-6 ps-0"><span className="text-ruby-500 text-xl">Q</span>
                    なぜロボコンを始めましたか？
                </div>
                <div className="w-fit  bg-white shadow rounded-xl p-6 m-3">
                    もともとロボコンの存在は知っていて、少し興味があったのでなんとなくで入りました。
                </div>
                <div className="p-6 ps-0"><span className="text-ruby-500">Q</span>
                    やりがいを感じることは何ですか？
                </div>
                <div className="w-fit  bg-white shadow rounded-xl p-6 m-3">
                    マシンが完成して自分たちが一から作ったマシンが試合で動いているのを見ることです。
                </div>
                <div className="p-6 ps-0"><span className="text-ruby-500">Q</span>
                    部活の雰囲気はどのような感じですか？
                </div>
                <div className="w-fit  bg-white shadow rounded-xl p-6 m-3">
                    今はみんなわちゃわちゃしてます。でもしっかりやる時はちゃんとやります。

                </div>
                <div className="p-6 ps-0"><span className="text-ruby-500">Q</span>
                    部活をやっていて楽しいと感じることは？
                </div>
                <div className="w-fit  bg-white shadow rounded-xl p-6 m-3">
                    できなかったことができるようになった時です。

                </div>
                <div className="p-6 ps-0"><span className="text-ruby-500">Q</span>
                    部活をやっていて大変だと感じることは？
                </div>
                <div className="w-fit  bg-white shadow rounded-xl p-6 m-3">
                    やっていることが難しくてついていけなことがあることです。でも部活のメンバーが支えてくれるので楽しくできています。

                </div>
            </div>
        </>
    )
}
export default Voice6