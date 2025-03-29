'use client';
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import MentorCard from "@/components/MentorCard";
import { useRouter } from "next/navigation";

export default function MentorPage() {
    const [dropdowns, setDropdowns] = useState<boolean[]>([false, false, false, false]);
    const [searchText, setSearchText] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const [recentSearches, setRecentSearches] = useState(["React", "Next.js"]);
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [isLoggedIn, setLogIn] = useState<boolean>(false);
    const [showNoResult, setShowNoResult] = useState(false);

    const toggleDropdown = (index: number) => {
        setDropdowns(dropdowns.map((item, i) => (i === index ? !item : false)));
    };

    const inputRef = useRef<HTMLDivElement>(null);
    const trendingSearches = ["AI", "Software Engineering", "Data Science", "Machine Learning"];

    useEffect(() => {
        if (searchText && suggestions.length === 0) {
            setShowNoResult(true);
            const timer = setTimeout(() => {
                setShowNoResult(false);
            }, 5000);
            return () => clearTimeout(timer);
        } else {
            setShowNoResult(false); 
        }
    }, [searchText, suggestions, showNoResult]); 
    

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            
            if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
                setShowDropdown(false);
            }

        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const router = useRouter();
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchText(value);
        if (value.length > 0) {
            // Mock search suggestions
            setSuggestions(
                trendingSearches.filter((item) =>
                    item.toLowerCase().includes(value.toLowerCase())
                )
            );
        } else {
            setSuggestions([]);
        }
    };

    const mentorsProps = [
        {
            key:"1",
            name: "Johny Rose",
            src: "/img/reviews1.svg",
            jobTitle: "Sr. Software Engineering at Google",
            desc: "PM @Bytespectrum || xCloud @Google || xML summer @Amazon || DSA || Team Developement || Growth Management || Full Stack Developer(MERN) || Full Stack Developer(MERN)|| Growth Management || || Growth Management || Full Stack Developer.",
            
        },
        {
            key:"2",
            name: "Dev Jain",
            src: "/img/reviews2.svg",
            jobTitle: "Sr. Software Engineering at Microsoft",
            desc: "PM @Bytespectrum || xCloud @Google || xML summer @Amazon || DSA || Team Developement || Growth Management || Full Stack Developer(MERN).",
            
        },
        {
            key:"3",
            name: "Rishi Mehta",
            src: "/img/reviews3.svg",
            jobTitle: "Sr. Software Engineering at JP Morgan",
            desc: "Prev Application Engineer @Google.",
            
        },
        {
            key:"4",
            name: "Heet Mistry",
            src: "/img/img01.svg",
            jobTitle: "Sr. Software Engineering at Zomato",
            desc: "PM @Bytespectrum || xCloud @Google || xML summer @Amazon || DSA || Team Development.",
            
        },
    ];

    const dropdownOptions = [
        { label: "Role", width: "78px" },
        { label: "Company", width: "110px" },
        { label: "Slot", width: "78px" },
        { label: "Rating", width: "90px" },
    ];

    const dropDownContents = [
        {
            key: "Role",
            Properties: [
                { label: "SE/SDE", iconType: "checkbox" },
                { label: "DS/AI/ML", iconType: "checkbox" },
                { label: "Product Management", iconType: "checkbox" },
                { label: "Project Management", iconType: "checkbox" },
                { label: "Quantitative Finance", iconType: "checkbox" },
            ],
        },
        {
            key: "Company",
            Properties: [
                { label: "FAANG", iconType: "checkbox" },
                { label: "Startups", iconType: "checkbox" },
                { label: "MNC's", iconType: "checkbox" },
                { label: "Others", iconType: "checkbox" },
            ],
        },
        {
            key: "Slot",
            Properties: [
                { label: "This week", iconType: "circle" },
                { label: "Next week", iconType: "circle" },
                { label: "Anytime", iconType: "circle" },
            ],
        },
        {
            key: "Rating",
            Properties: [
                { label: "Low to high", iconType: "circle" },
                { label: "High to Low", iconType: "circle" },
            ],
        },
    ];

    const renderIcon = (iconType: string) => {
        if (iconType === "checkbox") {
            return (
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <rect x="3" y="3" width="18" height="18" rx="3" ry="3" />
                    <path d="M9 12l2 2 4-4" />
                </svg>
            );
        } else if (iconType === "circle") {
            return (
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="12" cy="12" r="8" />
                </svg>
            );
        }
        return null;
    };

    return (
        <div>
            {/* Navbar */}
            <div className="bg-[#DBEAFE] w-full h-[64px] pt-[16px] pb-[16px] pl-[106px] pr-[106px]">
                <div className="flex flex-row justify-between w-full h-[32px] items-center">
                    <div className="font-monsterrat font-medium text-[24px] text-[#334155] text-center h-[32px]">
                        Mentors
                    </div>
                    <button className="bg-[#ffffff] text-[#334155] w-[136px] h-[28px] rounded-sm font-[600] text-[12px] text-center">
                        Become a mentor
                    </button>
                </div>
            </div>

            {/* Filters Section */}
            <div className="w-full h-[80px] pt-[24px] pb-[24px] pl-[106px] pr-[106px] gap-[10px]">
                <div className="h-[32px] flex flex-row justify-between items-center mx-auto">
                    {/* Search Input */}
                    <div
                        ref={inputRef}
                        className="relative w-[352px] h-[32px] rounded-[6px] px-[12px] py-[6px] bg-[#E2E8F0] flex items-center gap-1"
                    >
                        <Image src="/icons/search.svg" alt="Search Icon" width={20} height={20} />
                        <input
                            className="border-none w-full focus:outline-none"
                            type="text"
                            placeholder="Search by name"
                            value={searchText}
                            onChange={handleSearchChange}
                            onFocus={() => setShowDropdown(true)}
                        />

                        {showDropdown && (
                            <div className="absolute top-full left-0 mt-2 w-full bg-white shadow-lg rounded-md p-2 text-[#334155]">
                                {searchText.length === 0 ? (
                                    <div>
                                        {isLoggedIn === false ? (
                                            <>
                                                <h3 className="text-[#334155] text-xs font-semibold mb-2">
                                                    Trending Searches
                                                </h3>
                                                <ul>
                                                    {trendingSearches.map((search, index) => (
                                                        <li
                                                            key={index}
                                                            className="p-2 hover:bg-white cursor-pointer text-[#334155]"
                                                        >
                                                            {search}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </>
                                        ) : (
                                            <>
                                                <h3 className="text-[#334155] text-xs font-semibold mb-2">
                                                    Recent Search
                                                </h3>
                                                <ul>
                                                    {recentSearches.length > 0 ? (
                                                        recentSearches.map((recent, index) => (
                                                            <li
                                                                key={index}
                                                                className="p-2 hover:bg-gray-100 cursor-pointer text-[#334155]"
                                                            >
                                                                {recent}
                                                            </li>
                                                        ))
                                                    ) : (
                                                        trendingSearches.map((search, index) => (
                                                            <li
                                                                key={index}
                                                                className="p-2 hover:bg-white cursor-pointer text-[#334155]"
                                                            >
                                                                {search}
                                                            </li>
                                                        ))
                                                    )}
                                                </ul>
                                            </>
                                        )}
                                    </div>
                                ) : (
                                    <>
                                        {suggestions.length > 0 && (
                                            <>
                                                <h3 className="text-[#334155] text-xs font-semibold mb-2">
                                                    Suggestions
                                                </h3>
                                                <ul>
                                                    {suggestions.map((suggestion, index) => (
                                                        <li
                                                            key={index}
                                                            className="p-2 hover:bg-gray-100 cursor-pointer"
                                                        >
                                                            {suggestion}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </>
                                        )}
                                    </>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Dropdown Buttons */}
                    <div className="flex flex-row w-[409px] gap-[34px] items-center">
                        {dropdownOptions.map((option, index) => (
                            <button
                                key={option.label}
                                className={`w-[${option.width}] h-[32px] rounded-[6px] border border-solid border-[#CBD5E1] flex items-center justify-center text-[#334155] gap-1 p-4`}
                                onClick={() => toggleDropdown(index)}
                            >
                                {option.label}
                                <Image
                                    src={dropdowns[index] ? "/icons/contract.svg" : "/icons/expand.svg"}
                                    alt={`${option.label} Icon`}
                                    width={23}
                                    height={23}
                                />
                                {dropdowns[index] && (
                                    <div
                                        className="absolute bg-white p-2 min-w-max max-h-[300px] top-[201px] rounded-xl shadow-[0px_10px_15px_0px_#0000001A,0px_4px_6px_0px_#0000000D]"
                                        style={{ left: `calc(990px + ${index * 110}px)` }}
                                    >
                                        <div className="absolute -top-[8px] left-1/4 transform w-0 h-0 border-x-transparent border-x-[8px] border-b-[8px] border-b-[#E2E8F0]"></div>
                                        {dropDownContents
                                            .filter((content) => content.key === option.label)
                                            .map((content) =>
                                                content.Properties.map((item, itemIndex) => (
                                                    <div
                                                        key={itemIndex}
                                                        className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer rounded"
                                                    >
                                                        {renderIcon(item.iconType)}
                                                        <span className="text-sm text-gray-700">{item.label}</span>
                                                    </div>
                                                ))
                                            )}
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* No Result Bar */}
            {showNoResult && (
                <div className="absolute top-[50px] left-[850px] transform -translate-x-1/2 w-[850px] bg-white p-2  shadow-lg flex flex-row justify-start gap-1 rounded-xl border-[1px] border-[#E2E8F0] border-b-3 border-b-red-500 ">
                    <Image src='/icons/error_outline.svg'
                    alt="err"
                    height={20}
                    width={20}
                    />
                    <p className="text-[#334155] text-sm font-[500]">No result found</p>
                </div>
            )}

            {/* Mentor Cards Section */}
            <div className="flex flex-col mx-auto w-[1210px] gap-4">
                {mentorsProps.map((mentor, index) => (
                    <MentorCard
                        id={mentor.key}
                        key={index}
                        name={mentor.name}
                        src={mentor.src}
                        desc={mentor.desc}
                        jobTitle={mentor.jobTitle}
                        onPress={() => router.push(`/user/${encodeURIComponent(mentor.key)}`)}
                    />
                ))}
            </div>
        </div>
    );
}
