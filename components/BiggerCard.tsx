import React from 'react'
import Image from "next/image"


interface CardProps{
    title:string,
    desc:string,
    box11:string,
    box12:string,
    box21:string,
    box22:string,
    b1src:string,
    b2src:string,
    img:string,

}


export default function BCards(props:CardProps) {
    return (
        <div className="w-[528px] h-[538px] border-1 border-solid rounded-[12px] border-[#CBD5E1] pl-[24px] pt-[24px] font-dm-sans shadow-[0px_4px_6px_rgba(0,0,0,0.1)]">
            <div className='p-1 mb-3'>
                <Image
                src={props.img} 
                alt="thumbnail"
                height={170}
                width={478}
                />
            </div>
            <div className="w-[598px] h-[170px] ">

                <div className="w-[475px] h-[92px]  ">
                    <div className="h-[56px] pb-0 text-[20px] flex justify-between items-center">
                        <div className="pt-0 ">
                            <div className="font-[600] text-[20px] text-[#334155]">{props.title}</div>
                        </div>
                        <div className="pt-0">
                            <button className="h-[28px] w-[95px]  bg-[#334155] text-white rounded-lg text-[12px]">View Profile</button>
                        </div>
                    </div>


                    <div className="font-500 text-[16px] text-[#334155] ">
                    {props.desc}
                    </div>
                </div>

                <div className="w-[479px] h-[80px]  flex justify-between items-center ">
                    <div className="w-[226px] h-[72px]  pt-[12px] pl-[8px] bg-[#EEF2FF] rounded-[4px]">
                        <div className="w-[84px] h-[48px]  flex-col justify-between text-[14px]">
                            <p className="text-[#64748B]"> {props.box11}</p>
                            <div className="flex p-2 ">
                                <div>
                                    <Image src={props.b1src} alt="Mentor" width={20} height={20}></Image>
                                </div>
                                <div>
                                    {props.box12}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-[2px] h-[78px] bg-[#E2E8F0] "></div>

                    <div className="w-[226px] h-[72px]  pt-[12px] pl-[8px] bg-[#EEF2FF] rounded-[4px]">
                        <div className="w-[104px] h-[48px]  flex-col  text-[14px]">
                            <p className="text-[#64748B]">{props.box21}</p>
                            <div className="flex flex-row p-1  gap-1">
                                <div>
                                    <Image src={props.b2src} alt="Mentor" width={12}  height={12}></Image>
                                </div>
                                <div>
                                   {props.box22}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}