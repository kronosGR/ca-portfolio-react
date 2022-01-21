import classes from './contact.module.css';

const Contact = () => {
  return (
    <div className={classes.container}>
      <a href='https://github.com/kronosGR' target='_blank'>
        <img
          src='icons/github.svg'
          alt='github account'
          className={classes.contact_img}
        />
      </a>
      <a
        href='https://www.linkedin.com/in/kronosgr/'
        target='_blank'
        className={classes.contact_img} rel="noreferrer">
        <img src='icons/linkedin.svg' alt='linkedIn account' />
      </a>
      <a
        href='mailto:geo.eleo@gmail.com'
        target='_blank'
        className={classes.contact_link} rel="noreferrer">
        geo.elgeo@gmail.com
      </a>
    </div>
  );
};

export default Contact;
