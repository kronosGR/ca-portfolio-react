
import classes from './title.module.css';

const Title = (props) => {
  return <p className={classes.title}>{props.title}</p>;
};

export default Title;
