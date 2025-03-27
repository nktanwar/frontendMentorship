'use client';
import React, { useState } from 'react';

import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
// pages/index.tsx
import Cards from '@/components/Card';
import BCards from '@/components/BiggerCard'
import ReviewCard from '@/components/ReviewCard';







const HomePage = () => {

    const router = useRouter();
    const params = useParams();
    const id = params?.id;




    const [avgStar, setAvgStar] = useState<string>('5.0');
    const [nav, setNav] = useState<boolean[]>([true, false, false, false, false, false]);

    const HandleNavClicks = (id1: number) => {
        const arr = new Array(nav.length).fill(false);
        arr[id1] = true;
        setNav(arr);

    }

    const reviews = [
        {
            name: "Vedang Shah",
            rating: "5.0",
            desc: "He is very friendly and makes you comfortable first, then he give the actual feedback of your technical knowledge which helps to improve yourself, honestly that 1 hour was very helpful and useful for me.",
            src: "/img/vedang.png"

        },
        {
            rating: "4.5",
            desc: "His ability to create a relaxed atmosphere and provide insightful feedback made the hour-long session highly productive.",
            src: "/img/anonymos.png"

        },
        {
            name: "Hemet Singh",
            rating: "5.0",
            desc: "He is very friendly and makes you comfortable first, then he give the actual feedback of your technical knowledge which helps to improve yourself, honestly that 1 hour was very helpful and useful for me. His honest and actionable feedback on my technical abilities was invaluable",
            src: "/img/hemet.png"

        }

    ]

    const BcardProps = {
        1: {
            title: 'SQL Basics Cheat Sheet',
            desc: 'To strengthen your SQL and data skills',
            box11: "Service type",
            box12: "Package",
            box21: "Amount",
            box22: "1000",
            b1src: '/icons/package.svg',
            b2src: '/icons/currency.svg',
            img: '/img/thumbnail.png'
        }
    }

    const cardProps = {

        0: {
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
            onPress:()=>{
                const route = `/user/${id}/userDetail`;
                router.push(route);
             }
        },
        1: {
            title: 'Resume Review',
            desc: "I ll refine your resume to land better opportunities.",
            box11: "Service type",
            box12: "1:1 call",
            box21: "Replies",
            box22: "In 1 day",
            box31: "Amount",
            box32: "300",
            b1src: '/icons/vediocam.svg',
            b2src: '/icons/message.svg',
            b3src: '/icons/currency.svg',
        },
        2: {
            title: '1 month career guidance full confidence',
            desc: "2 x 1:1 call  Career guidance 1 X Priority Dm Resume review...",
            box11: "Service type",
            box12: "Package",
            box21: "Duration",
            box22: "1 month",
            box31: "Amount",
            box32: "1000",
            b1src: '/icons/package.svg',
            b2src: '/icons/schedule.svg',
            b3src: '/icons/currency.svg',
        },
        3: {
            title: 'Interview tips and tricks advice',
            desc: "Practical strategies to boost your interview confidence.",
            box11: "Service type",
            box12: "Package",
            box21: "Date",
            box22: "on 28th oct",
            box31: "Amount",
            box32: "1000",
            b1src: '/icons/package.svg',
            b2src: '/icons/schedule.svg',
            b3src: '/icons/currency.svg',
        },
        4: {
            title: 'Dealing with stakeholder',
            desc: "I ll tell you practical strategies to deal  with your stakeholder and how  to conduct it smoothly",
            box11: "Service type",
            box12: "Webinar",
            box21: "Date",
            box22: "on 28th oct",
            box31: "Amount",
            box32: "350",
            b1src: '/icons/webinar.svg',
            b2src: '/icons/schedule.svg',
            b3src: '/icons/currency.svg',

        }




    }








    const users = {
        "1": {
            key: "1",
            name: "Johny Rose",
            src: "/img/reviews1.svg",
            jobTitle: "Sr. Software Engineering at Google",
            desc: "PM @Bytespectrum || xCloud @Google || xML summer @Amazon || DSA || Team Developement || Growth Management || Full Stack Developer(MERN) || Full Stack Developer(MERN)|| Growth Management || || Growth Management || Full Stack Developer.",
        },
        "2": {
            key: "2",
            name: "Dev Jain",
            src: "/img/reviews2.svg",
            jobTitle: "Sr. Software Engineering at Microsoft",
            desc: "PM @Bytespectrum || xCloud @Google || xML summer @Amazon || DSA || Team Developement || Growth Management || Full Stack Developer(MERN).",
        },
        "3": {
            key: "3",
            name: "Rishi Mehta",
            src: "/img/reviews3.svg",
            jobTitle: "Sr. Software Engineering at JP Morgan",
            desc: "Prev Application Engineer @Google.",

        },
        "4": {
            key: "4",
            name: "Heet Mistry",
            src: "/img/img01.svg",
            jobTitle: "Sr. Software Engineering at Zomato",
            desc: "PM @Bytespectrum || xCloud @Google || xML summer @Amazon || DSA || Team Development.",
        },
    };




    if (!id) {
        return <div>No user selected.</div>;
    }

    const user = users[id as keyof typeof users];
    if (!user) {
        return <div>User not found.</div>;
    }

    return (
        <div className="w-full h-full">
            <div className=' flex flex-row w-full h-[230px] border-[2px] border-[#E2E8F0] justify-center items-center mb-8  '>
                

                <div className="w-[1200px] h-[226px]  p-8 flex rounded-[12px]  text-[#334155] font-dm-sans gap-3 ">

                    <Image src={user.src} alt="Mentor" width={190} height={170} />



                    <div className="w-[920px] h-[168px] flex flex-col justify-between gap-5">

                        <div className="h-[60px] ">
                            <div className="h-[28px]  flex items-center justify-between text-[20px]">
                                <p className="font-semibold mb-4">{user.name}</p>
                                <button className="h-[28px] w-[98px] bg-[#334155] text-white rounded-lg text-[12px] p-1"
                                 
                                >View Profile</button>
                            </div>

                            <div className="text-[18px] font-medium font-dm-sans"
                            >{user.jobTitle}</div>
                        </div>


                        <div className="h-[96px] bg-[#F1F5F9] p-3 rounded-[6px] gap-[10px] text-[14px] font-medium font-dm-sans">{user.desc}</div>
                    </div>
                </div>

            </div>

            <div className='text-[#0F172A] font-[450] font-Montserrat text-[26px] flex flex-row justify-start ml-[150px] mb-8' >
                Services
            </div>

            <div className='ml-[150px] '>
                <div className='bg-[#F1F5F9] w-[796px] rounded-xl flex flex-row justify-between p-2 mb-7'>
                    <button className='w-[124px] h-[28px] gap-[12px] py-[4px] px-[12px] rounded-[4px] hover:bg-white text-[#64748B]' onClick={() => {
                        HandleNavClicks(0);
                    }}>All</button>
                    <button className='w-[124px] h-[28px] gap-[12px] py-[4px] px-[12px] rounded-[4px] hover:bg-white text-[#64748B]' onClick={() => {
                        HandleNavClicks(1);
                    }}>1:1 Call</button>
                    <button className='w-[124px] h-[28px] gap-[12px] py-[4px] px-[12px] rounded-[4px] hover:bg-white text-[#64748B]' onClick={() => {
                        HandleNavClicks(2);
                    }}>Priority DM</button>
                    <button className='w-[124px] h-[28px] gap-[12px] py-[4px] px-[12px] rounded-[4px] hover:bg-white text-[#64748B]' onClick={() => {
                        HandleNavClicks(3);
                    }}>Package</button>
                    <button className='w-[124px] h-[28px] gap-[12px] py-[4px] px-[12px] rounded-[4px] text-[#64748B] hover:bg-white' onClick={() => {
                        HandleNavClicks(4);
                    }}>Webinar</button>
                    <button className='w-[134px] h-[28px] gap-[12px] py-[4px] px-[12px] rounded-[4px] hover:bg-white text-[#64748B]' onClick={() => {
                        HandleNavClicks(5);
                    }}>Digital Product</button>

                </div>

                {nav[0] && (<div className='mb-10'>
                    <div className='flex flex-col'>
                        <div className='flex flex:row gap-10 mb-7'>
                            <Cards {...cardProps[0]} />
                            <Cards {...cardProps[1]} />
                        </div>
                        <div className='flex flex:row gap-10 mb-7'>
                            <div className='flex flex-col gap-5'>
                                <Cards {...cardProps[2]} />
                                <Cards {...cardProps[3]} />

                            </div>
                            <BCards {...BcardProps[1]} />
                        </div>
                    </div>

                </div>)}

                {nav[4] && (<div className='mb-10'>
                    <div className='flex flex-col'>
                        <div className='flex flex:row gap-10 mb-7'>
                            <Cards {...cardProps[3]} />
                            <Cards {...cardProps[4]} />
                        </div>

                    </div>

                </div>)}

                {nav[1] && (<div className='mb-10'>
                    <div className='flex flex-col'>
                        <div className='flex flex:row gap-10 mb-7'>
                            <Cards {...cardProps[0]} />
                        </div>
                    </div>

                </div>)}

                {nav[2] && (<div className='mb-10'>
                    <div className='flex flex-col'>
                        <div className='flex flex:row gap-10 mb-7'>
                            <Cards {...cardProps[1]} />
                        </div>

                    </div>

                </div>)}

                {nav[3] && (
                    <div className="group relative mb-10">
                        <div className="flex flex-col">
                            <div className="flex flex-row gap-10 mb-7">
                                <Cards {...cardProps[2]} />
                            </div>
                        </div>
                        {/* Dialog Box */}
                        <div className="absolute right-140 top-1/2 transform -translate-y-1/2 bg-white border-2 border-[#CBD5E1] rounded-2xl shadow-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-100 w-[300px] h-[150px] flex justify-center items-center">
                            <div className='border-[#CBD5E1] border-dashed w-[280px] h-[130px] border-[2px] rounded-xl p-2 text-[#64748B] flex flex-col my-auto gap-2 relative'>

                                <p className='flex flex-row ml-4'>
                                    <Image
                                    className='absolute top-3 left-1'
                                        src='/icons/videocam.svg'
                                        alt="icon"
                                        width={20}
                                        height={20}
                                    />
                                    2 X 1:1 call - Career guidence
                                </p>

                                <p className='flex flex-row ml-4'>
                                <Image
                                className='absolute top-12 left-1'
                                        src='/icons/message.svg'
                                        alt="icon"
                                        width={20}
                                        height={20}
                                    />1 X Priority Dm - Resume review</p>
                                <p className='flex flex-row ml-4'>
                                <Image
                                        className='absolute top-19 left-1'
                                        src='/icons/webinar.svg'
                                        alt="icon"
                                        width={20}
                                        height={20}
                                    />1 X Webinar - Interview tips and tricks</p>

                            </div>


                        </div>
                    </div>
                )}


                {nav[5] && (<div className='mb-10'>
                    <div className='flex flex-col'>
                        <div className='flex flex:row gap-10 mb-7'>
                            <BCards {...BcardProps[1]} />

                        </div>
                    </div>

                </div>)}





                {/* reviews */}

                <div className=' border-t-2 border-[#E2E8F0] mb-8 p-1'>
                    <div className='text-[#0F172A] font-[450] font-Montserrat mb-3 text-[28px]'>Reviews</div>
                    <div>
                        <span className=' flex flex-row mb-7 font-[500] p-1 text-[#64748B]'>
                            {reviews.length} Reviews  |
                            <span className=' flex flex-row ml-2  '>
                                {avgStar}
                                <Image
                                    src='/icons/star.svg'
                                    alt='star'
                                    height={10}
                                    width={16}
                                ></Image>
                            </span>


                        </span>

                        <div className='flex flex-col gap-5'>
                            {reviews.map((review, index) => (
                                <ReviewCard
                                    key={index}
                                    name={review.name}
                                    src={review.src}
                                    rating={review.rating}
                                    desc={review.desc}
                                />
                            ))}
                        </div>


                    </div>



                </div>



            </div>

            <div>


            </div>






        </div>
    );
};

export default HomePage;
