import Link from "next/link";

const RecruitBadge = () => {
    return (
        <Link href="/recruit/2024">
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
        <Link href="/recruit">
            <div className="text-xs lg:text-base xl:text-base 2xl:text-base  flex items-center justify-center text-white rounded-full bg-gradient-to-b w-fit">
                <span className="p-2 break-words rounded-full ps-6 pe-6 bg-gradient-to-b from-ruby-500 to-ruby-700 w-fit">
                    総合採用
                </span>
            </div>
        </Link>
    )
}
export default RecruitBadge;