import React from 'react'
import Image from "next/image"



interface CardProps{
    title:string,
    desc:string,
    box11:string,
    box12:string,
    box21:string,
    box22:string,
    box31:string,
    box32:string,
    b1src:string,
    b2src:string,
    b3src:string,
    onPress?:()=>void

}


export default function Cards(props:CardProps) {
    return (
        <div className="w-[528px] h-[258px] border-1 border-solid rounded-[12px] border-[#CBD5E1] pl-[24px] pt-[24px] font-dmsans shadow-[0px_4px_6px_rgba(0,0,0,0.1)]">
            <div className="w-[406px] h-[200px] ">

                <div className="w-[479px] h-[112px]  ">
                    <div className="h-[56px] pb-8 text-[20px] flex justify-between items-center">
                        <div className="pt-0 ">
                            <div className="font-[600] text-[20px]">{props.title}</div>
                        </div>
                        <div className="pt-0">
                            <button className="h-[28px] w-[105px] bg-[#334155] text-white rounded-lg text-[12px]" onClick={props.onPress}>View Profile</button>
                        </div>
                    </div>


                    <div className="font-500 text-[14px]">
                    {props.desc}
                    </div>
                </div>

                <div className="w-[479px] h-[80px]  flex justify-between items-center ">
                    <div className="w-[126px] h-[72px]  pt-[12px] pl-[8px] bg-[#EEF2FF] rounded-[4px] ">
                        <div className="w-[94px] h-[48px] flex flex-col justify-between text-[14px] relative ">
                            <span className="text-[#64748B] absolute bottom-7 left-2">{props.box11}</span>
                            <div className=" text-[#64748B] flex flex-row p-2  absolute  top-6">
                                <div>
                                    <Image src='/icons/videocam.svg' alt="Mentor" width={20} height={20}></Image>
                                </div>
                                <span >
                                {props.box12}
                                </span>
                            </div>
                        </div>                      
                    </div>

                    <div className="w-[2px] h-[78px] bg-[#E2E8F0] "></div>

                    <div className="w-[136px] h-[72px]  pt-[12px] pl-[8px] bg-[#EEF2FF] rounded-[4px]">
                        <div className="w-[124px] h-[48px]  flex-col justify-between text-[14px] relative">
                            <p className="text-[#64748B] absolute bottom-7 left-2 ">{props.box21}</p>
                            <div className="flex flex-row p-2 justify-center gap-1 text-[#64748B] absolute  top-7">
                                <div>
                                    <Image src='/icons/schedule.svg' alt="Mentor" width={20}  height={20}></Image>
                                </div>
                                <span>
                                {props.box22}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="w-[2px] h-[78px] bg-[#E2E8F0] "></div>

                     <div className="w-[130px] h-[72px]  pt-[12px] pl-[8px] bg-[#EEF2FF] rounded-[4px]">
                        <div className="w-[94px] h-[48px]  flex-col justify-between text-[14px] relative">
                            <p className="text-[#64748B] absolute bottom-7 left-2">{props.box31}</p>
                            <div className="flex flex-row p-2 text-[#64748B] justify-center gap-1 absolute  top-6">
                                <div className='pt-1'>
                                    <Image src='/icons/currency.svg' alt="Mentor" width={10}  height={10}></Image>
                                </div>
                                <div>
                                {props.box32}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}