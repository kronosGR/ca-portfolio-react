import classes from './layout-second.module.css';

const LayoutSecond = (props) => {
  return <div className={classes.layout_second}>{props.children}</div>;
};

export default LayoutSecond;
