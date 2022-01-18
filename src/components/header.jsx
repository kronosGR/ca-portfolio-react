import classes from './header.module.css'

const Header= () => {
  return <nav className={classes.header}>
    <ul className={classes.nav}>
      <li><a href="#home" className={classes.nav_item}>Home</a></li>
      <li><a href="#projects" className={classes.nav_item}>Project</a></li>
      <li><a href="#home" className={classes.nav_item_big}>GK</a></li>
      <li><a href="#about" className={classes.nav_item}>About</a></li>
      <li><a href="#contact" className={classes.nav_item}>Contact</a></li>
    </ul>
  </nav>

}

export default Header