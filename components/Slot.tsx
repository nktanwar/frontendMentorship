import React, { useState } from 'react';
import Image from "next/image";
import Calendar from './Calender';
import TimeSlotComponent from './Test';

export default function Slot() {
    const [selectedDate, setSelectedDate] = useState(new Date()); // Store selected date

    return (
        <div className="w-[1140px] h-[660px] border-1 border-solid border-[#CBD5E1] rounded-[12px] p-[24px] bg-[#FFFFFF] flex flex-col gap-[24px] relative">
            <div className="w-[892px] h-[376px] flex gap-[16px]">
                {/* Calendar Section */}
                <div className="w-[610px] h-[376px] flex flex-col gap-[16px]">
                    <div className="w-[72px] h-[28px] flex text-[#0F172A] font-[500] flex-row justify-start">
                        <Image src='/icons/month.svg' alt="image" width={20} height={20} />
                        Date
                    </div>
                    <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
                </div>

                {/* Time Slot Section */}
                <div className="w-[366px] h-[376px] flex flex-col gap-[16px]">
                    <div className="w-[72px] h-[28px] flex items-center justify-between text-[#0F172A] font-[500]">
                        <Image src='/icons/schedule.svg' alt="image" width={24} height={24} />
                        <div>Time</div>
                    </div>
                    <div className="w-[466px] h-[330px] bg-[#F8FAFC] text-[#0F172A] ">
                        <TimeSlotComponent dateCurrent={selectedDate.toDateString()} />
                    </div>
                </div>
            </div>

            {/* Time Zone Selection */}
            <div className="w-full h-[40px] border-1 border-solid border-[#CBD5E1] rounded-xl text-[#0F172A] font-[500] ml-2 flex flex-row justify-between items-center relative">
                <button className="ml-2 flex flex-row gap-160">(GMT + 5:30) Chennai, Kolkata, Mumbai, New Delhi (IST)</button>
            </div>

            {/* Confirm Button */}
            <div className="w-[1092px] h-[32px] flex justify-end">
                <button className="w-[121px] h-[32px] bg-[#334155] border-1 border-solid px-[16px] rounded-[6px] text-[12px] font-[600] text-[#FFFFFF]">
                    Confirm Details
                </button>
            </div>
        </div>
    );
}
