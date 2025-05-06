import AboutUs from "@/components/about_us/about_us";
import NavBar from "@/components/navBar/navBar";
import React from "react";
import MenuContent from "./content";

const Menu = () => {
    return (
        <div>
            <NavBar></NavBar>
            <MenuContent></MenuContent>   
            <AboutUs></AboutUs>
        </div>
    )
}
export default Menu;