import Zoom from 'react-reveal/Zoom';
import classes from './title.module.css';

const Title = (props) => {
  return (
    <Zoom bottom>
      <p className={classes.title}>{props.title}</p>
    </Zoom>
  );
};

export default Title;
