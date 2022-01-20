import classes from './about-text.module.css';

const AboutText = () => {
 return <div>
    <span className={classes.title}>
      Hi, I am Georgios Katsanakis, a Front-End Developer and a Greek living in Sandnes,
      Norway.
    </span>
    <span className={classes.subtitle}>
      I am passionate on everything I do and I give 100%. I love to create and solve
      problems. In my free time I enjoy spending time with my family, improving myself by
      practicing and learning new technologies and Unreal Engine.
    </span>
    <span className={classes.quote}>- "Never stop learning"</span>
    <span className={classes.quote}>
      - "It is the definition of paranoia to do the same thing and expect a different
      result. "
    </span>
  </div>;
};

export default AboutText;
