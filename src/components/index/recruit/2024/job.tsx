interface jobCardProps {
    name: string,
    subName: string,
    description?: string,
    image?: string,
    alt?: string
}
const Job = () => {
    return (
        <div className="flex items-center w-full min-h-screen p-12 text-white bg-dark-950">
            <div className="w-full h-full">
                <div className="p-6 text-6xl text-center underline ps-0 font-extrabold font-inter decoration-ruby-500">Jobs</div>
                <div className="grid lg:grid-cols-3 xl:grid-cols-3 grid-cols-1 2xl:grid-cols-3 gap-3 mt-6">
                    <JobCard name="機械班" subName="Machine" image="/machine.webp" alt="卓上ボール盤" />
                    <JobCard name="回路班" subName="Circuit" image="/circuit.webp" alt="はんだごて" />
                    <div className="text-dark-950">
                        <JobCard name="制御班" subName="Control" image="/control.webp" alt="プログラミングの様子" />
                    </div>
                </div>
            </div>
        </div>
    )
}


const JobCard = ({ name, subName, image, alt }: jobCardProps) => {
    return (
        <div className="relative">
            <img src={image} alt={alt} className="w-full shadow-lg rounded-xl "></img>
            {/* <div className="w-full shadow-lg aspect-video bg-dark-950 rounded-xl"></div> */}
            <div className="absolute inset-x-0 bottom-0 flex items-center hover:text-white justify-center h-full p-3 text-xl font-semibold text-center transition-colors hover:bg-dark-950 hover:bg-opacity-95 rounded-xl">
                <div>
                    <p>{name}</p>
                    <p className="text-sm">{subName}</p>
                </div>
            </div>
        </div>
    )
}

export default Job