import Zoom from 'react-reveal/Zoom';
import classes from './modal.module.css';

function Modal(props) {
  const handleClick = (e) => {
    if (e.target.className.includes('modal_modal')){
      props.onClose();
    }
  };

  if (!props.isOpen) return null;
  return (
    <Zoom>
      <div className={classes.modal} onClick={handleClick}>
        <div onClick={props.onClose} className={classes.modal_btn_close}>
          Close
        </div>
        <img src={props.src} alt='project' className={classes.modal_img} />
      </div>
    </Zoom>
  );
}

export default Modal;
