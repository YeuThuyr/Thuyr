import React from "react";
import Image from "next/image";

const TagNavBar = () => {
    return (
        <div className="bg-white">
            <div className="container mx-auto flex">
                <div>
                    <Image src='./asset/new-logo.2fec2102.png' width={138} height={32} alt="" className="p-4"></Image>
                </div>
                <div className="flex-1 items-center flex">
                    <div className="container px-4">
                        <ul className="flex justify-end">
                            <li className="flex items-center mr-8 ml-2 text-[#00874A] text-[17px] font-bold">
                                <a><p className="w-[124px] flex justify-center">Starbucks eGift</p></a>
                            </li>
                            <li className="flex items-center mr-8 ml-2 text-[#00874A] text-[17px] font-bold">
                                <a><p className="w-[120px] flex justify-center">Benefits</p></a>
                            </li>
                            <li className="flex items-center mr-8 ml-2 text-[#00874A] text-[17px] font-bold">
                                <a><p className="w-[120px] flex justify-center">Mobile app</p></a>
                            </li>
                            <li className="flex items-center mr-8 ml-2 text-[#00874A] text-[17px] font-bold">
                                <a><p className="w-[120px] flex justify-center">Card designs</p></a>
                            </li>
                            <button className="flex border border-green-200 bg-black rounded-full text-green-200 hover:-translate-y-2 duration-300 mr-2 px-4 py-2">
                                <Image src='./asset/download.png' alt='' width={16} height={16} className="mr-2"></Image>
                                <p className="text-xs font-bold">Sign in</p>
                            </button>
                            <button className="border border-green-700 border-2 px-4 py-2 rounded-full bg-green-300 mr-2 hover:-translate-y-2 duration-300">
                                <p className="text-xs font-bold">Join now</p>
                            </button>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TagNavBar;