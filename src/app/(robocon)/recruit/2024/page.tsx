import EyeCatch from "@/components/index/recruit/2024/catch"
import Mission from "@/components/index/recruit/2024/mission"
import Schedule from "@/components/index/recruit/2024/schedule"
import Training from "@/components/index/recruit/2024/training"
import What from "@/components/index/recruit/2024/what"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: '2024年度新卒採用特設サイト',
    description: "奈良高専ロボコンプロジェクト・からくり部の2024年度新卒採用特設サイトです"
}
const Recruit2024 = () => {
    return (
        <>
            <div className="w-full bg-pearl-100 text-dark-950">
                <EyeCatch />
                <What />
                <Schedule />
                <Training />
            </div>
        </>
    )
}
export default Recruit2024