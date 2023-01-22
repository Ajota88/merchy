import { categories } from "../../utils/constants";
import "./Filters.scss";

const Filters = () => {
  const category = "jewelery";

  return (
    <div className="filters">
      <div className="container">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-control">
            <h5>category</h5>
            <div>
              {categories.map((c, index) => (
                <button
                  key={index}
                  name="category"
                  className={`${
                    category === c.name.toLowerCase() ? "active" : null
                  }`}
                >
                  {c.name}
                </button>
              ))}
            </div>
          </div>

          <div className="form-control">
            <h5>price</h5>
            <p className="price">100</p>
            <input type="range" name="price" />
          </div>
        </form>
        <button className="clear-btn">clear filters</button>
      </div>
    </div>
  );
};

export default Filters;
