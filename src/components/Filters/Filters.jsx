import { useDispatch, useSelector } from "react-redux";
import {
  updateFilters,
  clearFilters,
} from "../../features/filters/filtersSlice";
import { categories } from "../../utils/constants";
import "./Filters.scss";

const Filters = () => {
  const {
    filters: { minPrice, maxPrice, price, category },
  } = useSelector((state) => state.filters);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const name = e.target.name;
    let value = e.target.value;
    if (name === "category") {
      value = e.target.textContent.toLowerCase();
    }

    if (name === "price") {
      value = Number(value);
    }

    dispatch(updateFilters({ name, value }));
  };

  return (
    <div className="filters">
      <div className="container">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-control">
            <h5>category</h5>
            <div>
              <button
                name="category"
                className={`${
                  category.toLowerCase() === "all" ? "active" : null
                }`}
                onClick={handleChange}
              >
                All
              </button>
              {categories.map((c, index) => (
                <button
                  key={index}
                  name="category"
                  className={`${
                    category === c.name.toLowerCase() ? "active" : null
                  }`}
                  onClick={handleChange}
                >
                  {c.name}
                </button>
              ))}
            </div>
          </div>

          <div className="form-control">
            <h5>price</h5>
            <p className="price">{price}</p>
            <input
              type="range"
              name="price"
              min={minPrice}
              max={maxPrice}
              value={price}
              onChange={handleChange}
            />
          </div>
        </form>
        <button className="clear-btn" onClick={() => dispatch(clearFilters())}>
          clear filters
        </button>
      </div>
    </div>
  );
};

export default Filters;
