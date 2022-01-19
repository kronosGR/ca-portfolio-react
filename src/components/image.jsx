import classes from './image.module.css';

const Image = (props) => {
  return (
    <img
      src={props.src}
      alt={props.alt}
      className={classes.thumb}
      onClick={props.onClickHandler}
    />
  );
};

export default Image;
