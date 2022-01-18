import BgItem from './bg-item';

import classes from './layout-first.module.css';
import { skills } from '../data/skills';
import { getRandomInteger } from '../utils/utils';

const Layout = (props) => {

  const bgItems = skills.map(item => {
    let top = getRandomInteger(10,90);
    let left = getRandomInteger(0,60);
    // console.log(item.name, top, left)
    return  <BgItem key={item.name} title={item.name} size={item.size} top={top} left={left} />
  })

  return (
    <div className={classes.layout}>
      {props.children}
      {bgItems}
    </div>
  );
};



export default Layout;
