import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { cartTotalAmount } from "../../features/cart/cartSlice";
import {
  Hero,
  FeaturedProducts,
  Testimonials,
  Contact,
  Spinner,
} from "../../components";
import "./Home.scss";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const { isLoading } = useAuth0();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cartTotalAmount());
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

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
