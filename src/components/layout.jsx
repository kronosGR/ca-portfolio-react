import BgItem from './bg-item';

import classes from './layout.module.css';

const Layout = (props) => {
  return (
    <div className={classes.layout}>
      {props.children}
      <BgItem title="CSS" size="3"/>
    </div>
  );
};

export default Layout;
