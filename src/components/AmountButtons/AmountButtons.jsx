import "./AmountButtons.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
const AmountButtons = ({ increase, decrease, amount }) => {
  return (
    <div className="amount-container">
      <button onClick={decrease}>
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <span>{amount}</span>
      <button onClick={increase}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default AmountButtons;
