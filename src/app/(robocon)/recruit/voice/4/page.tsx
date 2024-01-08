
import { Metadata } from "next"
export const metadata: Metadata = {
    title: 'ロボコンがやりたくて高専に入った',
    description: '奈良高専ロボコンプロジェクトに参加する先輩のインタビューを紹介します。',
    icons: "/favicon.svg",
    metadataBase: new URL(process.env.METADATABASE_URL ?? "https://nararobocon.github.io"),
}
const Voice2 = () => {
    return (<>
        <div className="p-12 bg-ruby-500 text-white">
            <p>先輩の声 4</p>
            <div className="p-12 text-4xl font-extrabold">ロボコンがやりたくて高専に入った</div>
            <p className="text-end text-xl">2S 機械班</p>
        </div>
        <div className="p-12 w-full text-lg">
            <div className="p-6 ps-0"><span className="text-ruby-500 text-xl">Q</span>
                なぜロボコンを始めましたか？
            </div>
            <div className="w-fit  bg-white shadow rounded-xl p-6 m-3">
                テレビで見て実際にやりたいと思って高専に入ったから。ものづくりが好きだから。機械の細かい部分（マシンの複雑な仕組みとか）が好きだから。そもそもマシンが好き。動力で動くものが好き。
            </div>
            <div className="p-6 ps-0"><span className="text-ruby-500">Q</span>
                やりがいを感じることは何ですか？
            </div>
            <div className="w-fit  bg-white shadow rounded-xl p-6 m-3">
                自分の作った機構が思い通りに動いたとき。みんなで力を合わせて1つのマシンを作ったとき。
            </div>
            <div className="p-6 ps-0"><span className="text-ruby-500">Q</span>
                部活の雰囲気はどのような感じですか？
            </div>
            <div className="w-fit  bg-white shadow rounded-xl p-6 m-3">
                わいわい（たまにうるさい）、後輩には優しくしてるつもり（責めることだけは絶対にしない）
            </div>
            <div className="p-6 ps-0"><span className="text-ruby-500">Q</span>
                部活をやっていて楽しいと感じることは？
            </div>
            <div className="w-fit  bg-white shadow rounded-xl p-6 m-3">
                機構作ってるとき（加工組み立てもろもろ）、完成したとき
            </div>
            <div className="p-6 ps-0"><span className="text-ruby-500">Q</span>
                部活をやっていて大変だと感じることは？
            </div>
            <div className="w-fit  bg-white shadow rounded-xl p-6 m-3">
                作った機構の失敗が重なったとき、マシンが思い通りに動かないとき
            </div>
        </div>
    </>
    )
}
export default Voice2