import { useSelector, useDispatch } from "react-redux";
import { setGridView, setListView } from "../../features/filters/filtersSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faGrip } from "@fortawesome/free-solid-svg-icons";
import "./Sort.scss";

const Sort = () => {
  const { gridView } = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  return (
    <div className="sort">
      <div className="btn-container">
        <button
          className={`${gridView ? "active" : null}`}
          onClick={() => dispatch(setGridView())}
        >
          <FontAwesomeIcon icon={faGrip} />
        </button>
        <button
          className={`${!gridView ? "active" : null}`}
          onClick={() => dispatch(setListView())}
        >
          <FontAwesomeIcon icon={faList} />
        </button>
      </div>
      <p>10 products found</p>
      <hr />
      <form>
        <label htmlFor="sort-select">sort by</label>
        <select name="sort" id="sort-select" className="sort-input">
          <option value="price-lowest">price (lowest)</option>
          <option value="price-highest">price (highest)</option>
          <option value="name-a">name (a-z)</option>
          <option value="name-z">name (z-a)</option>
        </select>
      </form>
    </div>
  );
};

export default Sort;
