import React from "react";
import Image from "next/image"

interface MentorCardProps {
    id:string,
    name: string,
    src: string,
    onPress?: () => void,
    jobTitle: string,
    desc: string,


}


export default function MentorCard({ name, src, onPress, jobTitle, desc }: MentorCardProps) {


    return (


        <div className="w-auto h-[216px] bg-[#FFFFFF] p-6 flex rounded-[12px] border border-[#CBD5E1] text-[#334155] font-dm-sans shadow-[0px_4px_6px_rgba(0,0,0,0.1)] ">

            <Image src={src} alt="Mentor" width={180} height={160} />



            <div className="w-[920px] h-[168px] flex flex-col justify-between ml-6">

                <div className="h-[60px] ">
                    <div className="h-[28px]  flex items-center justify-between text-[20px]">
                        <p className="font-semibold">{name}</p>
                        <button className="h-[28px] w-[98px] bg-[#334155] text-white rounded-lg text-[12px] p-1"
                            onClick={onPress}
                        >View Profile</button>
                    </div>

                    <div className="text-[18px] font-medium font-dm-sans"
                    >{jobTitle}</div>
                </div>


                <div className="h-[96px] bg-[#F1F5F9] p-3 rounded-[6px] gap-[10px] text-[14px] font-medium font-dm-sans">{desc}</div>
            </div>
        </div>


    )
}