'use client';
import React, { useState } from 'react';
import '../app/globals.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function SidePanel() {
    const [expanded, setExpanded] = useState(false);
    const router = useRouter();

    const panelWidth = expanded ? 'w-[175px]' : 'w-[110px]';

    const images = [
        { src: '/Tab/mentor.svg', alt: 'mentor', label: 'Mentor',route:'/mentors' },
        { src: '/Tab/booking.svg', alt: 'booking', label: 'Booking',route:'/booking' },
        { src: '/Tab/job.svg', alt: 'job', label: 'Job',route:'/job' },
        { src: '/Tab/dm.svg', alt: 'dm', label: 'DM' ,route:'/dm'}
    ];

    function handleClick () {
        setExpanded(prev=>!prev); 
    };

    return (
        <div className={`bg-[#F8FAFC] ${panelWidth} shadow-2xl  flex flex-col p-6 transition-all duration-300 fixed `}>
            <div className="mt-2 space-y-4 h-screen">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-3 cursor-pointer"
                        onClick={() => handleClick()}
                    >
                        <Image
                            className="bg-[#E2E8F0] rounded h-[36px] w-[44px]"
                            src={image.src}
                            alt={image.alt}
                            width={44}
                            height={36}
                        />
                        {expanded && (
                            <span className="text-gray-700 font-medium">{image.label}</span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
