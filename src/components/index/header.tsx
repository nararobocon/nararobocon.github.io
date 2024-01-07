import Link from "next/link";
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
const Header = () => {
    return (
        <div className="sticky top-0 flex z-40 w-full justify-between p-3 bg-opacity-95 bg-dark-950">
            <div className="flex gap-6">
                <Link className='flex w-full items-center justify-center gap-3 p-1 w-fit' href='/'>
                    <img src="/logo-icon.svg" alt='logo' className='select-none h-9' />
                    <div className='select-none'>
                        <p className='text-xs'>奈良高専</p>
                        <p>ロボコンプロジェクト</p>
                    </div>
                </Link>
                {/* <div className="invisible lg:visible xl:visible 2xl:visible flex justify-center items-center gap-6">
                    <Link href='/' className="ps-3 pe-3 font-bold font-inter p-1 rounded-xl hover:bg-dark-900 transition-colors">Home</Link>
                    <Link href='/recruit' className="ps-3 pe-3 font-bold font-inter p-1 rounded-xl hover:bg-dark-900 transition-colors">Recruit</Link>
                </div> */}
            </div>
            <div className='flex items-center justify-end col-span-1 gap-5'>
                <a href="https://github.com/nararobocon" target='_blank' className='p-2 rounded-full hover:bg-dark-900'>
                    <FaGithub size={28} />
                </a>
                <a href="https://www.instagram.com/nararoboconteam/" target='_blank' className='p-2 rounded-full hover:bg-dark-900'>
                    <FaInstagram size={28} />
                </a>
                <a href="https://twitter.com/nararoboconteam" target='_blank' className='p-2 rounded-full hover:bg-dark-900'>
                    <FaTwitter size={28} />
                </a>
            </div>
        </div>
    )
}
export default Header