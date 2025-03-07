import NavBar from "../components/navBar/navBar";
import Image from "next/image";
import AboutUs from "../components/about_us/about_us";
import Content from "../components/content/content";

export default function Home() {

  return (
    <div>
      <NavBar />
      <Content></Content>
      <AboutUs></AboutUs>
    </div>
  );
}
