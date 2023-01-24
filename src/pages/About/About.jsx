import "./About.scss";

const About = () => {
  return (
    <div className="about | section section-center">
      <article className="container">
        <h2>👋 Hi my name is Alberto</h2>
        <p>I made this project to put in practice my React skills</p>
        <p>
          I's an E-commerce with user authentication and payment gateway. The
          products are fetched from fake store api. You can filter the products
          by category and price and sort them by alphabetical order or price. To
          be able to test the payment you have to login. You will find extra
          information in the ckeckout page.
        </p>
        <h3>Implemented Thechnologies </h3>
        <p>Framework: React</p>
        <p>Global Sate Management: Redux Toolkit</p>
        <p>Authentication: Auth0</p>
        <p>Payment Process: Stripe</p>
        <p>Styling: Css/Sass</p>
      </article>
    </div>
  );
};

export default About;
