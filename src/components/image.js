import classes from './image.module.css';

const Image = (props) => {
  console.log(props);
  return <img src={props.src} alt={props.alt} className={classes.thumb} />;
};

export default Image;
