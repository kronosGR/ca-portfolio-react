import classes from './layout-third.module.css'

const LayoutThird = (props) => {
  return <div className={classes.layout_third}>
    {props.children}
  </div>

}

export default LayoutThird