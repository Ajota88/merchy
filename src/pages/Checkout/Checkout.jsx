import "./Checkout.scss";

const Checkout = () => {
  return (
    <div className="section section-center">
      <h2>PAYMENT IN TEST MODE</h2>
      <h3>
        To simulate a purchase, a fake credit card will be used. Copy and paste
        the card number in the stripe checkout interface. Enter a valid month,
        year and any 3 digit number in the CV.
      </h3>
      <p>Test Card Number : 4242 4242 4242 4242</p>
      <button className="btn">CONTINUE TO STRIPE CHECKOUT</button>
    </div>
  );
};

export default Checkout;
