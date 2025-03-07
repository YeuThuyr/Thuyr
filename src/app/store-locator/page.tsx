import React from "react";
import GoogleMapComponent from "./google_map";
import NavBar from "@/components/navBar/navBar";
import AboutUs from "@/components/about_us/about_us";

const StoreLocator = () => {
    return (
        <div>
            <NavBar></NavBar>
            <GoogleMapComponent></GoogleMapComponent>
            <AboutUs></AboutUs>
        </div>
    )
}
export default StoreLocator;