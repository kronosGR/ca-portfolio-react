import ReactDOM from 'react-dom';
import { useRef, useEffect } from 'react';
import classes from './modal.module.css';

function Modal(props) {

  if (!props.isOpen) return null;
  return (
    <div className={classes.modal}>
      <div onClick={props.onClose} className={classes.modal_btn_close}>
        Close
      </div>
      <img src={props.src} alt='project' className={classes.modal_img} />
    </div>
  );
}

export default Modal;
