import NavBar from "./components/NavBar";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";

const App = () => {
  return (
    <>
      <div className="md:w-full w-screen flex justify-center px-5 md:px-20">
        <NavBar />
      </div>
      <Hero />
      <ShowcaseSection />
    </>
  )
}

export default App;