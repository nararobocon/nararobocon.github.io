
const Relationships = () => {
    return (
        <>
            <div className="p-12 bg-banana-500 text-white">
                <p></p>
                <div className="lg:p-12 text-4xl font-extrabold">からくり部とロボコンプロジェクトの関係</div>
            </div>
            <div className="p-12 bg-pearl-100 text-dark-950 leading-9 flex flex-col gap-3">
                <div className="text-2xl font-noto font-bold underline decoration-banana-500">ロボコンプロジェクトとからくり部</div>
                <p>本校にはロボコンに関係する団体が主に2つあります。<br />
                    1つは本サイトを運営する学校の「ロボコンプロジェクト」もう1つは部活動の「からくり部」です。<br />
                    ロボコンプロジェクト参加学生は全員からくり部に所属しており、
                    からくり部はロボコンプロジェクトの作業着をユニフォームとしています。<br />
                    また、これらの団体は同じGitHub Organizationを使用しています。<br />
                    学内でもこれらの関係についてたびたび質問を受けます。<br />
                    <span className="text-xs">※ GitHub:プログラムの変更履歴を管理する「Git」のデータをインターネット上に保存するサービス。GitHub Organizationは複数人で共有できる。</span>
                </p>
                <div className="text-2xl font-noto font-bold underline decoration-banana-500">2つの団体の違い</div>
                <p>
                    ロボコンプロジェクトをからくり部の大きな違いは、
                    ロボコンプロジェクトは学校が運営する団体であり、「部活動」ではないため、学校の部活動の規則に影響を受けません。
                    さらに、多くの資金を多方面から得ることができるため、ロボット制作に多くの資金を投入することができます。
                    また、M科・E科・S科・実習工場の先生に指導教員となっていただけるので、専門的な知識を得ることができます。
                    また、学生課のサポートを受けられるため、大会運営委員会との連絡・宿泊予約・ロボットの輸送などもすべて学校側が行ってくれます。
                    それにより、学生はロボット制作に集中することができます。</p>
                <span className="text-xs">※ 学生課:奈良高専の学生に関する事務作業を行う部門。入試運営も行う。</span>
                <p>
                    からくり部は、「部活動」であり、他の部活動と同じように、学校の部活動の規則に従う必要があります。<br />
                    そして、資金も学生会から割り当てられた予算と部員からの部費のみとなります。
                </p>
                <div className="text-2xl font-noto font-bold underline decoration-banana-500">ロボコンをするにはどちらに入ればよいのか</div>
                <p>
                    ロボコンがしたい場合は、まずからくり部に入部することをおすすめします。<br />
                    先輩全員がロボコン経験者であるため情報が得やすいです。
                    また、プロジェクト開始前からロボコンに向けた新人講習が始まるため、早い段階で入ることをお勧めします。
                </p>
            </div>
        </>
    )
}
export default Relationships;