import classes from './bg-item.module.css';

const BgItem = (props) => {

  const size = ()=>{
    if (props.size===3) return 'classes.size3';
  }
  return (
    <div className={`${classes.bg_item} ${classes.animation_heart} ${size}`}>{props.title}</div>
  );
};

export default BgItem;
