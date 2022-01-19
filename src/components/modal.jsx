import ReactDOM from 'react-dom'
import { useRef, useEffect } from 'react';
import classes from './modal.module.css'

function Modal(props){
  const modalRef= useRef(null);

  useEffect(()=> {
    // modalRef.current.style.top = props.y + "px";
    console.log(modalRef.current.getBoundingClientRect())
  },[])
  
  if (!props.isOpen) return null;
  return ReactDOM.createPortal(<div className={classes.modal} ref={modalRef}>
    <div onClick={props.onClose} className={classes.modal_btn_close}>X</div>
    <img src={props.src} alt='project' className={classes.modal_img}/>
  </div>,
  document.getElementById('modal'))
}

export default Modal