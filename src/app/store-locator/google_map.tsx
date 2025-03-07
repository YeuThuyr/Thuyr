"use client";

import locations from "./locations_data";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Roboto_Flex } from "next/font/google";
import { useEffect } from "react";

const containerStyle = { width: "70%", height: "596px" };

export default function GoogleMapComponent() {
  let data = '';

  locations.map((location, index) => {
    data += `<div className="flex px-3 py-[6px]">
                <div className="flex-1">
                  <p className="font-bold">${location.name}</p>
                  <p>6:30 - 00:00</p>
                </div>
                <div className="px-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                  </svg>
                </div>
              </div>`
  });

  useEffect(() => {
    const container = document.querySelector('.location-container');
    if (container){
      container.innerHTML = data;
    }
  },[])

  return (
      <div className="black pb-4">
        <div className="flex pt-1">
            <div className="pl-14 w-[30%]">
              <div className="flex flex-col">
                <div className="flex flex-col bg-white gap-3 px-3 py-2 sticky">
                  <input className="border border-2 pl-2 py-[6px]" placeholder="Find a Store"></input>
                  <div className="">
                    <button className="border border-2 bg-cyan-950 px-3 py-1 text-sm">FILTER</button>
                  </div>
                </div>
                <div className="location-container py-3 text-base overflow-y-auto h-[500px] pl-4"></div>
              </div>
            </div>
            <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}>
                <GoogleMap mapContainerStyle={containerStyle} center={locations[0]} zoom={12}>
                    {locations.map((location, index) => (
                        <Marker key={index} position={{ lat: location.lat, lng: location.lng }} />
                    ))}
                </GoogleMap>
            </LoadScript>
        </div>
      </div>
  );
}
