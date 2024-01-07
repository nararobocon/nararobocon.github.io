import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const RecruitBadge = () => {
    return (
        <Link href="/recruit">
            <div className="text-xs lg:text-base xl:text-base 2xl:text-base  flex items-center justify-center text-white rounded-full bg-gradient-to-b from-slate-800 to-slate-900 w-fit">
                <span className="p-2 break-words rounded-full ps-6 pe-6 bg-gradient-to-b from-azure-500 to-azure-700 w-fit hover:from-azure-400 hover:to-azure-600 transition-all">
                    新卒採用
                </span>
            </div>
        </Link>
    )
}
export const CareerRecruitBadge = () => {
    return (
        <div className="text-xs lg:text-base xl:text-base 2xl:text-base  flex items-center justify-center text-white rounded-full bg-gradient-to-b w-fit">
            <span className="p-2 break-words rounded-full ps-6 pe-6 bg-gradient-to-b from-slate-500 to-slate-700 w-fit">
                キャリア採用(準備中)
            </span>
        </div>
    )
}
export default RecruitBadge;