import HeroSection from "./components/HeroSection"
import Reviews from "./components/Reviews"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Note: Navbar will be created by your friend */}
      <HeroSection />
      <Reviews />
      <Footer />
    </div>
  )
}

export default App
