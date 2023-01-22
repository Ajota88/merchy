import {
  Hero,
  FeaturedProducts,
  Testimonials,
  Contact,
} from "../../components";
import "./Home.scss";

const Home = () => {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Testimonials />
      <Contact />
    </main>
  );
};

export default Home;
