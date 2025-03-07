import AboutUs from "@/components/about_us/about_us";
import NavBar from "@/components/navBar/navBar";
import React from "react";
import CoffeContent from "./coffe_content";

const Coffe = () => {
    return (
        <div>
            <NavBar></NavBar>
            <CoffeContent></CoffeContent>
            <AboutUs></AboutUs>
        </div>
    )
}
export default Coffe;