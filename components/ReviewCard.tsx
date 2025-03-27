
import React from 'react'
import Image from "next/image"


interface ReveiwCardProps{
    rating:string,
    desc:string,
    src:string,
    name?:string
}



export default function ReviewCard({rating,desc,src,name="Anonymous"}:ReveiwCardProps) {
    return (

        <div className="h-[188px] w-[1090px] border-solid border-1 rounded-[12px] border-[#CBD5E1] shadow-[0px_4px_6px_rgba(0,0,0,0.1)] flex flex-col p-[24px] gap-[12px]">
            <div className="w-[892px] h-[96px] p-0 flex flex-col gap-[12px]">
                <div className="w-[45px] h-[20px] flex items-center space-x-1">
                    <div className="text-[16px] text-[#334155] font-semibold leading-none">
                        {rating}
                    </div>
                    <Image src={src} alt="image" width={16} height={16} className="w-[16px] h-[16px]" />
                </div>

                <div className="w-[892px] h-[64px] bg-[#F8FAFC] text-[#334155] py-[12px] px-[8px] text-[14px] font-[500]">
                    <p>{desc}
                    </p>
                </div>
            </div>
            <div className="flex gap-[10px] w-[129px] h-[32px]">
                <Image src={src} alt="image" width={32} height={32} className="rounded-full"></Image>
                <div className="py-[6px] text-[14px] text-[#64748B] font-[500]">
                   {name}
                </div>
            </div>
        </div>

    )
}