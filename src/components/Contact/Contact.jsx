import "./Contact.scss";

const Contact = () => {
  return (
    <section className="contact | section-center">
      <h3>Join our newsletter and get 20% off</h3>
      <div className="content">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Voluptatibus, pariatur facere! Consequuntur maiores ullam, eligendi
          omnis officia quas quia vero.
        </p>
        <form className="contact-form">
          <input
            type="email"
            className="form-input"
            placeholder="enter email"
          />
          <button className="submit-btn">subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
