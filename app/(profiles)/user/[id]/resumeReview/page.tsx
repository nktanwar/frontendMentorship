'use client'
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import TextBox from "@/components/Input";


const props = {

    title: 'Resume Review',
    desc: "I’ll refine your resume to land better opportunities.",
    box11: "Service type",
    box12: "Priority DM",
    box21: "Replies",
    box22: "In 1 Day",
    box31: "Amount",
    box32: "100",
    b1src: '/icons/message.svg',
    b2src: '/icons/schedule.svg',
    b3src: '/icons/currency.svg',

}



export default function page() {
    const router = useRouter();
    const [isActive, setIsActive] = useState<boolean>(false);

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


                            <div className="text-[#64748B] font[450] text-[16px] mb-3">
                                Assist you with
                            </div>

                            <div className="w-[930px] h-[72px] pt-[12px] pl-[8px] bg-[#EEF2FF] rounded-[4px] text-[#334155] ">
                                <ul className="list-disc list-inside">
                                    <li>I will identify the mistakes in your copy.
                                    </li>
                                    <li>  I will refine and improve your copy for better clarity and impact.</li>
                                </ul>



                            </div>





                            <div className="w-[1079px] h-[100px]  flex justify-between items-center ">
                                <div className="w-[336px] h-[72px]  pt-[12px] pl-[8px] bg-[#F9FAFB] rounded-[4px] ">
                                    <div className="w-[134px] h-[48px] flex flex-col justify-between text-[14px] relative ">
                                        <span className="text-[#64748B] absolute bottom-7 left-2">{props.box11}</span>
                                        <div className=" text-[#64748B] flex flex-row p-2 gap-1 absolute  top-6">
                                            <div className="mt-[3px]">
                                                <Image src={props.b1src} alt="Mentor" width={20} height={20}></Image>
                                            </div>
                                            <span className="">
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
                                                <Image src={props.b2src} alt="Mentor" width={20} height={20}></Image>
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
                                                <Image src={props.b3src} alt="Mentor" width={10} height={10}></Image>
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
            <div className="mt-8 ml-[90px]  ">

                <div>
                    <TextBox setIsActive={setIsActive} />
                </div>
            </div>
            <div className="h-[60px] w-[150px] ml-[1100px] mt-3  ">
                <button
                    className={`p-4  w-[115px] h-[42px] rounded-xl flex flex-row justify-center items-center  
                    ${isActive ? "bg-[#334155] text-white" : "bg-[#E2E8F0] text-[#94A3B8]"}`}
                >
                    Next
                </button>
            </div>

        </div>

    )
}