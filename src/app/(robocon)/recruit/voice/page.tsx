import Voice from "@/components/index/recruit/voice";
import { Metadata } from "next"
export const metadata: Metadata = {
    title: '先輩の声',
    description: '奈良高専ロボコンプロジェクトに参加する先輩のインタビューを紹介します。',
    icons: "/favicon.svg",
    metadataBase: new URL(process.env.METADATABASE_URL ?? "https://nararobocon.github.io"),
}
const VoicePage = () => {
    return (
        <div>
            <Voice />
        </div>
    )
}
export default VoicePage;