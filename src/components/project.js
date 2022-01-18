import classes from './project.module.css';

const Project = (props) => {
  const { project } = props;

  // plus information
  const plus = project.plus.split('\n').map((item, i) => {
    if (i<project.plus.split('\n').length-1) return <li key={i}>{item}</li>
  })

  // technologies
  const techs = project.techs_imgs.map((img,i) => {
    return <img src={img} alt='technology' className={classes.project_tech_img} />
  })

  return (
    <div className={classes.project}>
      <div>
        <span className={classes.project_title}>{project.name}</span>
        <span className={classes.project_year}>{project.year}</span>
        <p>{project.info}</p>
        <ul className={classes.project_plus}>
          {plus}
          {techs}
        </ul>
      </div>
      <div>
        {/* Thumb */}
      </div>
    </div>
  );
};

export default Project;
