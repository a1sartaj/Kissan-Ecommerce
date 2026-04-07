import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import BestSelling from "./sections/BestSelling"
import Blog from "./sections/Blog"
import Categories from "./sections/Categories"
import CropSection from "./sections/CropSection"
import Hero from "./sections/Hero"
import Offers from "./sections/Offers"
import PestDisease from "./sections/PestDisease"
import ProductSection from "./sections/ProductSection"
import Trending from "./sections/Trending"

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <Trending />
      <Offers />
      <PestDisease />
      <CropSection />
      <BestSelling />
      <ProductSection title="Seeds" />
      <ProductSection title="Growth Promoters" />
      <ProductSection title="Smart Farming" />
      <ProductSection title="Sprayers" />
      <Blog />
      <Footer />
    </>
  )
}

export default App
