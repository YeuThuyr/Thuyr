'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import { workingTime } from "./locations_data";

interface Props {
    children: {
        lat: number,
        lng: number,
        time: string,
        address: string,
        tel: string,
        link: string,
    }
}

const DataDisplay = ({children} : Props) => {
    return (
        <div className="flex flex-col">
            <div>
                <div className="flex gap-1 mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8">
                        <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
                    </svg>
                    <p className="font-bold text-sm">{children.address}</p>
                </div>
                <a className="flex mb-3 gap-1 group" href={children.link} target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fill-rule="evenodd" d="M3.74 20.25a.75.75 0 0 0 .75-.75V8.999h13.938l-2.47 2.47a.75.75 0 0 0 1.061 1.06l3.75-3.75a.75.75 0 0 0 0-1.06l-3.75-3.75a.75.75 0 0 0-1.06 1.06l2.47 2.47H3.738a.75.75 0 0 0-.75.75V19.5c0 .414.336.75.75.75Z" clip-rule="evenodd" />
                    </svg>
                    <p className="text-[#333333] font-bold group-hover:text-green-200">Get Direction</p>
                </a>
                <div className="flex gap-1">
                    <p className="font-bold">Tel.</p>
                    <a href="" className="text-[#333333] hover:text-green-200">{children.tel}</a>
                </div>
            </div>
            <div className="border-t my-4"></div>
            <div>
                <div>
                    {workingTime.map((day, index) => (
                        <div className="grid grid-cols-2 mb-3 text-sm pl-1 font-bold">
                            <p className="col-span-1">{day}</p>
                            <p className="col-span-1">{children.time}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default DataDisplay;