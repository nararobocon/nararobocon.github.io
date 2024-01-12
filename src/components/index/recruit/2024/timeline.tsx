"use client";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { LightBulbIcon, UserGroupIcon, CubeIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
import 'react-vertical-timeline-component/style.min.css';
import { ReactNode } from "react";


const TimeLine = () => {
    return (
        <div className="p-6">
            <VerticalTimeline animate={false} lineColor="#ff5c78" className=" text-dark-950 font-inter">
                <TimeLineItem title="アイデア出し" subtitle="Idea" date="April" description="発表されたルールブックをもとにアイデアを固めます" icon={<LightBulbIcon />} />
                <TimeLineItem title="試作" subtitle="Try" date="May - Jun" description="設計し、試作を行います" icon={<CubeIcon />} />
                <TimeLineItem title="本番機制作" subtitle="Production" date="Jul - Aug" description="試作をもとに本番用機体を制作します" icon={<WrenchScrewdriverIcon />} />
                <TimeLineItem title="練習" subtitle="Practice" date="Sept - Oct" description="試合に向けて練習を繰り返します。" icon={<UserGroupIcon />} />
            </VerticalTimeline>
        </div>
    )
}

type TimeLineItemProps = {
    title: string
    subtitle?: string
    date: string
    description: string
    icon: ReactNode
}

const TimeLineItem = ({ title, subtitle, date, description, icon }: TimeLineItemProps) => {
    return (
        <VerticalTimelineElement
            visible={true}
            className="font-noto rounded-xl"
            contentStyle={{ background: '#fff', color: '#1d2427', borderRadius: "0.75rem", boxShadow: "none" }}
            contentArrowStyle={{ borderRight: '7px solid  #fff' }}
            dateClassName="font-inter text-dark-950"
            date={date}
            iconStyle={{ background: '#fff', color: '#ff5c78', boxShadow: "none" }}
            icon={icon}
        >
            <h3 className="text-xl font-bold font-noto">{title}</h3>
            <h4 className="text-sm font-inter">{subtitle}</h4>
            <p className="text-md font-base font-noto">
                {description}
            </p>
        </VerticalTimelineElement>
    )
}

export default TimeLine