import { useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import "./Modal.scss";
import ReactPortal from "../ReactPortal/ReactPortal";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Modal = ({ children, isOpen, handleClose }) => {
  const nodeRef = useRef(null);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [isOpen]);

  return (
    <ReactPortal wrapperId="portal">
      <CSSTransition
        in={isOpen}
        timeout={{ entry: 0, exit: 200 }}
        unmountOnExit
        classNames="modal"
        nodeRef={nodeRef}
      >
        <div className="modal" ref={nodeRef}>
          <FontAwesomeIcon
            className="close-icon"
            icon={faXmark}
            onClick={handleClose}
          />
          <div className="modal-content">{children}</div>
        </div>
      </CSSTransition>
    </ReactPortal>
  );
};

export default Modal;
