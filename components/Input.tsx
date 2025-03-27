import React, { useState } from 'react';
import Image from "next/image";


interface MyComponentProps {
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function TextBox({ setIsActive }: MyComponentProps) {
    const [images, setImages] = useState<File[]>([]);
    const [text, setText] = useState("");

    // Handle image selection
    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const selectedFiles = Array.from(event.target.files);
            setImages((prevImages) => [...prevImages, ...selectedFiles]);
        }
        setIsActive(true);
    };

    // Handle image removal
    const removeImage = (indexToRemove: number) => {
        setImages(images.filter((_, index) => index !== indexToRemove));
    };

    const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
        setIsActive(event.target.value.trim().length > 0); 
    };

    return (
        <div className="w-[1125px] h-[512px] border-solid border-1 rounded-[6px] border-[#CBD5E1] bg-[#F8FAFC] flex flex-col p-0">
            <div className="w-[1121px] h-[45px] border-b border-[#CBD5E1] rounded-[6px] bg-[#FFFFFF] flex items-center pl-[24px] gap-[18px] ">
                <div className="w-[498px] h-[24px] flex items-center justify-between mx-auto ">
                    <div className="w-[126px] h-[20px] flex items-center justify-between pr-[8px]">
                        <div className="w-[103px] h-[20px] text-[16px] font-[600] text-[#64748B] mb-[6px] ">
                            Heading1
                        </div>
                        <div className='mt-2 '>
                            <Image src='/icons/expand.svg' alt="Icon" width={24} height={24} />
                        </div>
                    </div>
                    <div className="w-[361px] h-[24px] flex justify-between">
                        <button type="button" title="Bold">
                            <Image src='/icons/B.png' alt="Bold" width={24} height={24} />
                        </button>
                        <button type="button" title="Italic">
                            <Image src='/icons/I.png' alt="Italic" width={24} height={24} />
                        </button>
                        <button type="button" title="Underline">
                            <Image src='/icons/U.png' alt="Underline" width={24} height={24} />
                        </button>
                        <button type="button" title="Strikethrough">
                            <Image src='/icons/S.png' alt="Strikethrough" width={24} height={24} />
                        </button>
                        <button type="button" title="Quote">
                            <Image src='/icons/doubleQ.png' alt="Quote" width={24} height={24} />
                        </button>
                    </div>
                </div>
                <div className="w-[361px] h-[24px] flex justify-between mx-auto">
                    <button type="button" title="List">
                        <Image src='/icons/three.svg' alt="List" width={24} height={24} />
                    </button>
                    <button type="button" title="Numbered List">
                        <Image src='/icons/12.svg' alt="Numbered List" width={24} height={24} />
                    </button>
                    <button type="button" title="Link">
                        <Image src='/icons/link.svg' alt="Link" width={24} height={24} />
                    </button>

                    {/* Photo Upload Button */}
                    <label className="cursor-pointer">
                        <input
                            type="file"
                            accept="image/*"
                            multiple
                            className="hidden"
                            onChange={handleImageChange}
                        />
                        <Image src='/icons/photo.svg' alt="Upload Photo" width={24} height={24} />
                    </label>

                    <button type="button" title="Video Frame">
                        <Image src='/icons/vframe.svg' alt="Video Frame" width={24} height={24} />
                    </button>
                    <button type="button" title="Emoji">
                        <Image src='/icons/smile.svg' alt="Emoji" width={24} height={24} />
                    </button>
                </div>
            </div>

            <div className="w-[1120px] h-[367px]">
                <div className="text-[#0F172A] text-[14px] mt-[16px] ml-[24px]">
                    <input
                        type="text"
                        placeholder="Ask Your Question"
                        className="w-[892px] h-[20px] px-4 border-none focus:outline-none focus:ring-0 focus:border-transparent placeholder-[#94A3B8]"
                        onChange={handleTextChange}
                    />
                </div>

                {/* Display Uploaded Images with Remove Option */}
                <div className="mt-4 flex gap-4 p-4 ">
                    {images.map((image, index) => (
                        <div key={index} className="relative border p-2 rounded-md bg-[#CBD5E1]">
                            {/* Display File Name */}
                            <p className="text-sm text-gray-600 truncate w-20 text-center mb-1 ml-3">{image.name}</p>

                            {/* Display Image */}
                            <Image
                                src={URL.createObjectURL(image)}
                                alt={`Uploaded ${index}`}
                                className="w-120 h-80 object-cover rounded-md p-3"
                                width={60}
                                height={20}
                            />

                            {/* Remove Button */}
                            <button
                                onClick={() => removeImage(index)}
                                className="absolute top-0 right-0 text-white rounded-full px-2 py-1 text-xs"
                            >
                                <div className='flex flex-row justify-start gap-110'>
                                    <Image
                                        src='/icons/imgframe.svg'
                                        alt='drop'
                                        width={24}
                                        height={24}
                                    />
                                    <Image
                                        src='/icons/drop.svg'
                                        alt='drop'
                                        width={24}
                                        height={24}
                                    />
                                </div>
                            </button>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
