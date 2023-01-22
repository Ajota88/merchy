import { Link } from "react-router-dom";
import "./ListView.scss";

const ListView = ({ products }) => {
  return (
    <div className="list-view">
      {products.map((product) => (
        <article key={product.id}>
          <img src={product.image} alt={product.title} />
          <div>
            <h4>{product.title}</h4>
            <h5 className="price">${product.price}</h5>
            <p>{product.description.substring(0, 150)}...</p>
            <Link to={`/product/${product.id}`} className="btn">
              Details
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ListView;
