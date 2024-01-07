import Link from "next/link";
import RecruitBadge, { CareerRecruitBadge } from "./recruitBadge";

const Recruit = () => {
    return (
        <div className="flex items-center w-full min-h-screen p-12 bg-pearl-100 text-dark-950" id="about">
            <div className="grid sm:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 flex-row items-center w-full h-full gap-3 ">
                <div className="flex flex-col gap-3 ps-6">
                    <div className="p-6 text-6xl underline ps-0 w-fit font-extrabold font-inter decoration-azure-500">Recruit</div>
                    <div className="flex gap-3">
                        <RecruitBadge />
                        <CareerRecruitBadge />
                    </div>
                    <p className="break-words">私たちは常に仲間を募集しています</p>
                    <p className="break-words">まずはお気軽にお問い合わせください。</p>
                    <Link href="https://forms.office.com/r/UMgN9EWHwr" className="text-azure-500 underline decoration-azure-500">なんでもお問い合わせフォーム</Link>
                </div>
                <div className="">
                    <img src="monodukuri.webp" alt="ものづくり工房" className="rounded-xl shadow-lg"></img>
                    {/* <div className="w-full h-full text-white shadow bg-dark-950 aspect-video rounded-xl"></div> */}
                </div>
            </div>
        </div>
    )
}
export default Recruit;