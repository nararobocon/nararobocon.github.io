import Link from "next/link"
import { UserIcon } from "@heroicons/react/24/outline"


const Voice = () => {
    return (
        <div className="w-full min-h-screen p-12 bg-pearl-100 text-dark-950">
            <div className="p-6 text-6xl text-start font-extrabold font-inter ">
                <span className="decoration-ruby-500 underline">Voice</span>
                <span className="p-6 pt-0 font-light text-sm no-underline text-start">先輩の声を紹介します</span>
            </div>
            <div className=" grid md:grid-cols-2 sm:grid-cols-1 xl:grid-cols-4 2xl:grid-cols-4 lg:grid-cols-4 gap-6">
                <VoiceCard link="1" name="1E 男性" group="回路班" heading="やろうと思えば何でもできる環境" />
                <VoiceCard link="2" name="2S 女性" group="機械班" heading="意見交換がしやすい" />
                <VoiceCard link="3" name="1I 男性" group="制御班" heading="直感でやりたいと感じた" />
                <VoiceCard link="4" name="2S 男性" group="機械班" heading="ロボコンがやりたくて高専に入った" />
            </div>

        </div>
    )
}

type VoiceCardProps = {
    name: string,
    group: string,
    heading: string,
    link: string,
}

const VoiceCard = ({ name, group, heading, link }: VoiceCardProps) => {
    let themeColror
    switch (group) {
        case "機械班":
            themeColror = "bg-ruby-500"
            break;
        case "回路班":
            themeColror = "bg-banana-500"
            break;
        case "制御班":
            themeColror = "bg-azure-500"
            break;
    }
    return (
        <Link href={"/recruit/voice/" + link}>
            <div className="relative w-full bg-dark-950 shadow-lg hover:bg-dark-900 transition-colors aspect-video rounded-xl">
                <div className="w-full h-full flex justify-center items-center flex-col">
                    <UserIcon className="h-12 w-12 text-white" />
                    <p className="text-sm italic text-white">&quot;{heading}&quot;</p>

                </div>
                {/* <div className="w-full shadow-lg aspect-video bg-dark-950 rounded-xl"></div> */}
                <div className="absolute z-10 inset-x-0 top-0 right-0 flex items-start justify-start h-full text-xl font-semibold text-center text-white  rounded-xl">
                    <div className={themeColror + " p-3 rounded-tl-xl text-white"}>
                        <p className="text-sm">{group}</p>
                        {/* <p className="text-sm">{subName}</p> */}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Voice;