import Voice from "@/components/index/recruit/voice"
import Message from "@/components/index/recruit/message"
import Jobs from "@/components/index/recruit/jobs"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: '総合採用',
    description: 'Nara Robocon Project 総合採用情報',
    icons: "/favicon.svg",
    metadataBase: new URL(process.env.METADATABASE_URL ?? "https://nararobocon.github.io"),
}

const Recruit = () => {
    return (
        <>
            <Message />
            <Jobs />
            <Voice />
        </>
    )
}
export default Recruit