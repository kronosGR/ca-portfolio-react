import classes from './portfolio-image.module.css';

const PortfolioImage = ()=>{
  return <div className={classes.container}>
    <img  className={classes.portfolio_image} src="images/me.jpg" alt="Georgios Katsanakis"/>
  </div>
}

export default PortfolioImage
