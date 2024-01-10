import Link from "next/link"

const Hooter = () => {
    return (
        <footer className="w-full p-6 text-white bg-dark-950">
            <div className="w-full grid grid-cols-3 gap-3 p-12">
                <div>
                    <p className="font-bold pb-3">INTRODUCE</p>
                    <ul>
                        <HooterLink link="/machine" name="機械班" />
                        <HooterLink link="/circuit" name="回路班" />
                        <HooterLink link="/control" name="制御班" />
                    </ul>
                </div>
                <div>
                    <p className="font-bold pb-3">RECRUIT</p>
                    <ul>
                        <HooterLink link="/recruit" name="総合採用" />
                        <HooterLink link="/recruit/voice" name="先輩の声" />
                        <HooterLink link="/recruit/2024" name="新卒採用特設ページ" />
                    </ul>
                </div>
                <div>
                    <p className="font-bold pb-3">CONTACT</p>
                    <ul>
                        <HooterSNSLink link="https://twitter.com/nararoboconteam" name="Twitter(X)" />
                        <HooterSNSLink link="https://www.instagram.com/nararoboconteam/" name="Instagram" />
                        <HooterSNSLink link="https://www.youtube.com/channel/UCLspKwFEPHxOIQskaTbplQQ" name="Youtube" />
                        <HooterSNSLink link="https://github.com/nararobocon" name="GitHub" />
                        <HooterSNSLink link="https://nararoboconproject.wordpress.com/" name="Blog" />
                    </ul>
                </div>
            </div>
            <div className="text-xs">
                <p>当サイトはアクセス解析のために米国Google LCCのGoogle Analyticsを使用しています。詳しくは
                    <a href="https://marketingplatform.google.com/about/analytics/terms/jp/" className="underline text-azure-500 decoration-azure-500">Google アナリティクス利用規約</a>
                    および
                    <a href="https://policies.google.com/technologies/ads?hl=ja" className="underline text-azure-500 decoration-azure-500">Google LCC広告ポリシー</a>
                    をご覧ください。
                </p>
                <p>このサイトを使用することで発生した損害について、当プロジェクトは一切の責任を負いません。</p>
            </div>

            <p className="pt-3 text-center">© 2024 奈良高専ロボコンプロジェクト</p>
        </footer>
    )
}

type HooterLinkProps = {
    name: string,
    link: string
}

const HooterLink = ({ link, name }: HooterLinkProps) => {
    return (
        <ul className="pt-1">
            <Link className="text-sm" href={link}>{name}</Link>
        </ul>
    )
}
const HooterSNSLink = ({ link, name }: HooterLinkProps) => {
    return (
        <ul className="pt-1">
            <Link target="_blank" className="text-sm" href={link}>{name}</Link>
        </ul>
    )
}
export default Hooter; 