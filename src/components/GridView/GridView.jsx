import "./GridView.scss";
import { ProductCard } from "../index";

const GridView = ({ products }) => {
  return (
    <div className="grid-view">
      <div className="container">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default GridView;
