import "./AmountButtons.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
const AmountButtons = () => {
  return (
    <div className="amount-container">
      <button>
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <span>10</span>
      <button>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default AmountButtons;
