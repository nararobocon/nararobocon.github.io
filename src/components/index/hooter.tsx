const Hooter = () => {
    return (
        <footer className="w-full p-6 text-white bg-dark-950">
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
export default Hooter; 