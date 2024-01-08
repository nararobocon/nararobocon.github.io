import EyeCatch from "@/components/index/recruit/2024/catch"
import Job from "@/components/index/recruit/2024/job"
import What from "@/components/index/recruit/2024/what"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: '2024年度新卒採用特設サイト',
    description: "奈良高専ロボコンプロジェクト/からくり部の2024年度新卒採用特設サイトです"
}
const Recruit2024 = () => {
    return (
        <>
            <div className="w-full bg-pearl-100 text-dark-950">
                <EyeCatch />
                <What />
                <Job />
            </div>
        </>
    )
}
export default Recruit2024