import { useEffect, useRef } from 'react';
import classes from './bg-item.module.css';

const BgItem = (props) => {
  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.style.top = props.top +'vh';
    divRef.current.style.left = props.left + 'vw';
    //console.log(divRef.current.getBoundingClientRect());
  }, []);

  const size = () => {
    let tmp = 'size3';
    if (props.size === 2) tmp = 'size2';
    if (props.size === 1) tmp = 'size1';
    return tmp;
  };

  return (
    <div
      ref={divRef}
      className={`${classes.bg_item} ${classes.animation_heart} ${size()}`}>
      {props.title}
    </div>
  );
};

export default BgItem;
