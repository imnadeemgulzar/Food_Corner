import About from "./about/page";
import AboutUs from "./components/AboutUs";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TopMenu from "./components/TopMenu";

export default function Home() {
  return (
    <>
      <Hero/>
      <TopMenu/>
      <AboutUs/>
      </>
  )
}
