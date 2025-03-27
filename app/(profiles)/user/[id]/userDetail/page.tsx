'use client'
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Slot from "@/components/Slot";



const props = {

    title: 'Career Guidance',
    desc: "I'll give you advice to help with your career decisions. I'll give you advice to help with your career decisions.",
    box11: "Service type",
    box12: "1:1 call",
    box21: "Duration",
    box22: "30 min",
    box31: "Amount",
    box32: "300",
    b1src: '/icons/vediocam.svg',
    b2src: '/icons/schedule.svg',
    b3src: '/icons/currency.svg',

}



export default function page() {
    const router = useRouter();
    return (
        <div>
            <div className=' flex flex-col w-full h-[530px]  border-[2px] border-[#E2E8F0]  mx-auto    '>
                <div className="flex flex-row mt-10">
                    <div className='flex flex-row gap-1 '>
                        <button
                            onClick={() => {
                                router.back();

                            }}
                        >
                            <div className='text-[#64748B] font-DM_sans font-[500] flex flex-row'>
                                <Image src='/icons/vector.svg'
                                    className="  text-[#334155] "
                                    alt="back" width={16} height={16} /> Back</div>
                        </button>
                        <div className=" text-[#64748B] font-[600] ml-10 text-3xl flex flex-row gap-2 justify-start items-center">Johny Rose <Image
                            src='/icons/verify.svg' alt='verify' height={20} width={20}
                        ></Image> </div>

                    </div>


                </div>



                {/* similar to card */}
                <div className="mt-8 ml-[90px]">
                    <div className="w-[1128px] h-[344px] border-2 border-solid rounded-[12px] border-[#CBD5E1] pl-[24px] pt-[24px] font-dm-sans shadow-[0px_4px_6px_rgba(0,0,0,0.1)]">
                        <div className="w-[406px] h-[200px] ">

                            <div className="w-[1079px] h-[112px]  ">
                                <div className="h-[56px] pb-8 text-[30px] font-[600] text-[#334155] flex justify-between items-center">
                                    <div className="pt-0 ">
                                        <div className="font-[500] text-[28px]">{props.title}</div>
                                    </div>
                                </div>


                                <div className="font-[500] text-[#334155]  text-[16px]">
                                    {props.desc}
                                </div>
                            </div>



                            <div className="w-[930px] h-[102px] pt-[12px] pl-[8px] bg-[#EEF2FF] rounded-[4px] text-[#334155] ">
                                <ul className="list-disc list-inside">
                                    <li>I can help you figure out your next steps.</li>
                                    <li>I can guide you through career transitions and help you explore new fields.</li>
                                    <li>Need advice on software engineering roles? I’ll help you navigate your options.</li>
                                </ul>



                            </div>





                            <div className="w-[1079px] h-[100px]  flex justify-between items-center ">
                                <div className="w-[326px] h-[72px]  pt-[12px] pl-[8px] bg-[#F9FAFB] rounded-[4px] ">
                                    <div className="w-[84px] h-[48px] flex flex-col justify-between text-[14px] relative ">
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

                                <div className="w-[336px] h-[72px]  pt-[12px] pl-[8px] bg-[#F9FAFB] rounded-[4px]">
                                    <div className="w-[324px] h-[48px]  flex-col justify-between text-[14px] relative">
                                        <p className="text-[#64748B] absolute bottom-7 left-2 ">{props.box21}</p>
                                        <div className="flex flex-row p-2 justify-center gap-1 text-[#64748B] absolute  top-7">
                                            <div>
                                                <Image src='/icons/schedule.svg' alt="Mentor" width={20} height={20}></Image>
                                            </div>
                                            <span>
                                                {props.box22}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-[2px] h-[78px] bg-[#E2E8F0] "></div>

                                <div className="w-[330px] h-[72px]  pt-[12px] pl-[8px] bg-[#F9FAFB] rounded-[4px]">
                                    <div className="w-[94px] h-[48px]  flex-col justify-between text-[14px] relative">
                                        <p className="text-[#64748B] absolute bottom-7 left-2">{props.box31}</p>
                                        <div className="flex flex-row p-2 text-[#64748B] justify-center gap-1 absolute  top-6">
                                            <div className='pt-1'>
                                                <Image src='/icons/currency.svg' alt="Mentor" width={10} height={10}></Image>
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



                </div>





            </div>

            {/* slot */}
            <div className="mt-8 ml-[90px]">
                <div className=" mt-4 mb-9 font-[500] text-[24px] text-base leading-loose text-[#0F172A]">Slot</div>

                <div>
                    <Slot/>
                </div>
            </div>

        </div>

    )
}