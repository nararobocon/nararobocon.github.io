type JobCardProps = {
    name: string,
    description: string,
}
const Jobs = () => {
    return (
        <div className="w-full min-h-screen flex justify-center items-center">
            <div>
                <div className="p-6 text-6xl text-center underline font-extrabold font-inter text-white decoration-ruby-500">Jobs</div>
                <p className="text-center p-6">ロボコンでは様々な役割があります。それぞれの職種が助け合い、よりよいロボットを目指します。</p>
                <div className="grid lg:grid-cols-3 xl:grid-cols-3 sm:grid-cols-1 md:grid-cols-1 gap-6 p-6">
                    <JobCard name="機械班" description="機械班はロボット本体を制作します。3DCADで設計を行い、アルミやプラスチックを加工してロボットを組み立てます。" />
                    <JobCard name="回路班" description="回路班は機械班が制作したロボットに配線を行い、動かせるようにします。奈良高専はほとんどの基盤が自主設計品となっており、それらの設計も行います。" />
                    <JobCard name="制御班" description="制御班は機械班と回路班が組み立てたロボットをプログラムし、動くようにします。PCとマイコンを使用し、コーディングにはC言語を主に使用します。" />
                </div>
                <p className="p-6 pt-0 text-sm text-center">これらのほかに部活をサポートするマネージャーもいます。</p>
            </div>
        </div>
    )
}
const JobCard = ({ name, description }: JobCardProps) => {
    return (
        <div className="bg-pearl-100 rounded-xl text-dark-950">
            <div className="font-noto font-bold text-lg p-3">{name}</div>
            <div className="p-6 pt-0">
                <p>{description}</p>
            </div>
        </div>
    )
}
export default Jobs;