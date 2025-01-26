import LatestProducts from "./common/LatestProducts";
import FeaturedProducts from "./common/FeaturedProducts";
import Hero from "./common/Hero";
import Header from "./common/Header";
const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <LatestProducts />
      <FeaturedProducts />
    </>
  );
};

export default Home;
