"use client"
import Link from "next/link";
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    return (
        <header className="sticky font-inter top-0 z-40 w-full p-3 bg-opacity-95 text-white bg-dark-950">
            <nav className="mx-auto flex  items-center justify-between lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link className='flex items-center font-noto justify-center gap-3 p-1 w-fit' href='/'>
                        {/* <img src="/logo-icon.svg" alt='logo' className='select-none h-9' /> */}
                        <div className='select-none'>
                            <p className='text-xs'>奈良高専</p>
                            <p>からくり部</p>
                        </div>
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-6">
                    <Link href="/karakuri" className="hover:bg-dark-900 p-3 rounded-xl transition-colors text-sm font-semibold leading-6 text-white">
                        Home
                    </Link>
                    <Link href="/" className="hover:bg-dark-900 p-3 rounded-xl transition-colors text-sm font-semibold font-noto leading-6 text-white">
                        ロボコンプロジェクト
                    </Link>
                </Popover.Group>
                <div className="hidden gap-6 lg:flex lg:flex-1 lg:justify-end">
                    <a href="https://github.com/nararobocon" target='_blank' className='p-2 rounded-full hover:bg-dark-900'>
                        <FaGithub size={28} />
                    </a>
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-dark-950 bg-opacity-95 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-perl-100"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Link
                                    href="/karakuri"
                                    className="-mx-3 block transition-colors rounded-xl px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-dark-900"
                                >
                                    Home
                                </Link>
                                <Link
                                    href="/"
                                    className="-mx-3 font-noto block transition-colors rounded-xl px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-dark-900"
                                >
                                    ロボコンプロジェクト
                                </Link>
                            </div>
                            <div className="py-6 flex gap-6 text-white">
                                <a href="https://github.com/nararobocon" target='_blank' className='p-2 rounded-ful hover:bg-dark-900'>
                                    <FaGithub size={28} />
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
export default Header