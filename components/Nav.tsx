'use client'
import React from "react";
import Image from "next/image";
export default function NavBar(){

    const images = [
        { src: '/Nav/notification.svg', alt: 'notify',width:39,height:32 },
        {src: '/Nav/profile.svg',alt:'profile',width:118,height:32}
    ]
    return (
        <div className="flex flex-row justify-end gap-[6px] p-4">
            {images.map((image,index)=>(
                <div key={index}
                className=""
                onClick={()=>{
                    console.log("done");
                }}
                >
                    <Image
                    className="border-[#CBD5E1] "
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}

                    />


                </div>

            ))
            }
            
        </div>
    )
}