import AboutUs from "@/components/about_us/about_us";
import NavBar from "@/components/navBar/navBar";
import React from "react";
import Content from "./content"

const Page = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Content></Content>
            <AboutUs></AboutUs>
        </div>
    )
}
export default Page;