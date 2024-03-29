import About from '@/components/index/about'
import Groups from '@/components/index/group'
import Intro from '@/components/index/intro'
import Recruit from '@/components/index/recruit'
import Supported from '@/components/index/supported'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nara Robocon Project',
  description: 'Nara Robocon Project Official Site',
  icons: "/favicon.svg",
  metadataBase: new URL(process.env.METADATABASE_URL ?? "https://nararobocon.github.io"),
}

export default function Home() {
  return (
    <div className='w-full text-dark-950'>
      <Intro />
      <About />
      <Groups />
      <Recruit />
      <Supported />
    </div>
  )
}
