import RecruitBadge, { CareerRecruitBadge } from "./recruitBadge"
import { FaTrophy, FaCrown } from "react-icons/fa";

const Intro = () => {
    return (
        <div className="grid grid-cols-12 pt-3 pb-3 text-white bg-dark-950">
            <div className="col-span-12 p-6 bg-cover lg:col-span-6 md:col-span-12">
                <div className="flex gap-6">
                    <RecruitBadge />
                    <CareerRecruitBadge />
                </div>
                <div className="text-start">
                    <div className="mt-12 mb-12 font-extrabold text-white text-7xl xl:text-9xl 2xl:text-9xl lg:text-9xl md:text-8xl sm:text-7xl font-inter">
                        Nara<br />
                        Robocon<br />
                        Project<br></br>
                    </div>
                    <div className="flex gap-3 pt-6 pb-6 font-bold">
                        <span className="flex items-center justify-center p-1 rounded-full ring-2 ring-yellow-500 ps-3 pe-3 w-fit"><FaTrophy size={18} /> 最多ロボコン大賞受賞</span>
                        <span className="flex items-center justify-center p-1 rounded-full ring-2 ring-yellow-500 ps-3 pe-3 w-fit"><FaCrown size={18} /> 全国大会2回優勝</span>
                    </div>
                </div>
            </div>
            <div className="invisible w-full h-full lg:col-span-6 lg:visible md:invisible xl:visible 2xl:visible sm:invisible">
                <img className="object-cover w-full h-full shadow-lg rounded-s-xl" src="/2022.webp" alt="2022年 「三笠」全国優勝"></img>
            </div>
        </div>
    )
}
export default Intro