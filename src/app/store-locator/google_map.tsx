"use client";

import locations from "./locations_data";
import { GoogleMap, LoadScript, Marker, InfoWindow, useLoadScript } from "@react-google-maps/api";
import { Roboto_Flex } from "next/font/google";
import { useCallback, useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import DataDisplay from "./data_display";
import options from "./filter_option";

const containerStyle = { width: "75%", height: "596px" };

export default function GoogleMapComponent() {

  const [ selectLocation, setSelectLocation ] = useState(null);
  const [ expandData, setExpandData ] = useState(null);
  const [ searchedItem, setSearchedItem ] = useState("");
  const [ openFilter, setOpenFilter ] = useState(false)
  const mapRef = useRef<google.maps.Map | null>(null);
  const [visibleLocations, setVisibleLocations] = useState(locations);
  const [ bounds, setBounds ] = useState<google.maps.LatLngBounds | null>(null);

  const onBoundsChanged = () => {
    if (!mapRef.current) return;
    setBounds(mapRef.current.getBounds() || null);
  };

  useEffect(() => {
    if (!mapRef.current) return;
    const bounds = mapRef.current.getBounds();
    
    if (!bounds) return;

    setVisibleLocations(
      locations.filter(location =>
        bounds.contains(new google.maps.LatLng(location.lat, location.lng))
        && location.name.toLowerCase().includes(searchedItem.toLowerCase())
      )
    );
  }, [bounds, searchedItem]);

  return (
      <div className="black pb-4">
        <div className="mx-0 custom:mx-14 flex pt-1">
            <div className="w-[30%]">
              <div className="flex flex-col">
                <div className="flex flex-col bg-white gap-3 px-3 py-2 sticky">
                  <input className="border border-2 pl-2 py-[6px]" placeholder="Find a Store" type="text" onChange={(e) => setSearchedItem(e.target.value)}></input>
                  <div className="">
                    <button onClick={() => setOpenFilter(openFilter === false ? true : false)} className="border border-2 bg-cyan-950 px-3 py-1 text-sm">FILTER</button>
                  </div>
                  <AnimatePresence>
                    {openFilter === true && (
                      <motion.div initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white rounded-lg overflow-hidden">
                        {options.map((option) => (
                          <div className="flex gap-2 mb-3">
                            <input type="checkbox"></input>
                            <p>{option.name}</p>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                <ul className="location-container py-3 text-base overflow-y-auto h-[500px] pl-4">
                  {visibleLocations.map((location, index) => (
                    <li>
                      <div key={index} className={`flex px-3 py-[6px] ${selectLocation === location ? "bg-gray-300 text-black" : "bg-black text-white"}`}>
                        <div className="flex-1">
                          <p className="font-bold cursor-pointer" onClick={() => setSelectLocation(location)}>{location.name}</p>
                          <p>{location.time}</p>
                        </div>
                        <div className="px-4">
                          <button onClick={() => setExpandData(expandData === location ? null : location)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                              <path strokeLinecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <AnimatePresence>
                        {expandData === location && (
                          <motion.div initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-3 p-2 bg-gray-100 rounded-lg overflow-hidden"><DataDisplay>{location}</DataDisplay></motion.div>
                        )}
                      </AnimatePresence>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}>
                <GoogleMap mapContainerStyle={containerStyle} center={locations[0]} zoom={5} onLoad={(map) => { mapRef.current = map }} onBoundsChanged={onBoundsChanged}>
                    {locations.map((location, index) => (
                        <Marker key={index}
                        position={{ lat: location.lat, lng: location.lng }}
                        icon={`http://maps.google.com/mapfiles/ms/icons/green-dot.png`}
                        onClick={() => setSelectLocation(location)}
                       />
                    ))}

                    {selectLocation && (
                      <InfoWindow
                        position={{ lat: selectLocation.lat, lng: selectLocation.lng }}
                        onCloseClick={() => setSelectLocation(null)}
                      >
                        <div>
                          <h2 className="font-bold">{selectLocation.name}</h2>
                          <p>{selectLocation.address}</p>
                        </div>
                      </InfoWindow>
                    )}
                </GoogleMap>
            </LoadScript>
        </div>
      </div>
  );
}
