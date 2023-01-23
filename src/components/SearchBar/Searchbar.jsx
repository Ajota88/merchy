import "./Searchbar.scss";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { updateFilters } from "../../features/filters/filtersSlice";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(updateFilters({ name, value }));
  };

  return (
    <div className="searchbar">
      <input
        type="text"
        placeholder="Search..."
        onChange={handleChange}
        name="text"
      />
      <button onClick={() => navigate("/products")}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </div>
  );
};

export default SearchBar;
