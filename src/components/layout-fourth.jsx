import classes from './layout-fourth.module.css';

const LayoutFourth = (props) => {

  return (
    <div className={classes.layout} id="home">
      {props.children}
    </div>
  );
};



export default LayoutFourth;
