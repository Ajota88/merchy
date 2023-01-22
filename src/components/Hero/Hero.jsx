import { Link } from "react-router-dom";
import "./Hero.scss";
import mainImage from "../../assets/hero1.jpg";
import secondaryImage from "../../assets/hero2.jpg";

const Hero = () => {
  return (
    <section className="hero">
      <article className="content">
        <h1>design your comfort zone</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, vel
          unde. Consequatur, vel consequuntur recusandae aliquid libero dolor
          adipisci excepturi?
        </p>
        <Link to="/products" className="btn hero-btn">
          shop now
        </Link>
      </article>
      <article className="images-container">
        <img src={mainImage} className="main-img" alt="hero image 1" />
        <img
          src={secondaryImage}
          className="secondary-img"
          alt="hero image 2"
        />
      </article>
    </section>
  );
};

export default Hero;
