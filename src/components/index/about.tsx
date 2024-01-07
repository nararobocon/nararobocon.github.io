const About = () => {
    return (
        <div className="flex items-center justify-center w-full h-screen bg-pearl-100 text-dark-950" id="about">
            <div className="flex items-center justify-center w-full h-full p-12">
                <div className="grid flex-row items-center grid-cols-12 gap-3 ">
                    <div className="flex flex-col lg:col-span-6 xl:col-span-6 2xl:col-span-6 col-span-12 gap-3">
                        <div className="p-6 text-6xl underline ps-0 w-fit font-extrabold font-inter decoration-azure-500">About</div>
                        <p className="break-words">奈良高専ロボコンプロジェクトは、高専ロボコン出場のためのプロジェクトです。
                            毎年4月にプロジェクトがスタートし、高専ロボコンに向けてロボット制作を行います。
                            プロジェクトには奈良高専の学生であればだれでも参加でき、学科は関係ありません。</p>
                    </div>
                    <div className=" lg:col-span-6 xl:col-span-6 2xl:col-span-6 col-span-12">
                        <img src="letsrobocon.webp" alt="ロボコンしようぜ！" className="rounded-xl shadow-lg"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;