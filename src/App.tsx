import NavBar from "./components/NavBar";
import LogoSection from "./sections/LogoSection";
import Hero from "./sections/Hero";
import FeatureCards from "./sections/FeatureCards";
import ShowcaseSection from "./sections/ShowcaseSection";

const App = () => {
  return (
    <>
      <div className="md:w-full w-screen flex justify-center px-5 md:px-20">
        <NavBar />
      </div>
      <Hero />
      <ShowcaseSection />
      <LogoSection />
      <FeatureCards />
    </>
  )
}

export default App;