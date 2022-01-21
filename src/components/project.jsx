import { useState, useRef, useEffect } from 'react';
import Button from './button';
import Image from './image';
import Modal from './modal';

import classes from './project.module.css';

const Project = (props) => {
  const { project } = props;

  const [modalIsOpen, setModalIsOpen] = useState(false);

  function modalHandler() {
    setModalIsOpen(!modalIsOpen);
  }

  // plus information
  const plus = project.plus.split('\n').map((item, i) => {
    if (i < project.plus.split('\n').length - 1) return <li key={i}>{item}</li>;
  });

  // technologies
  const techs = project.techs_imgs.map((img, i) => {
    return (
      <img src={img} key={i} alt='technology' className={classes.project_tech_img} />
    );
  });

  return (
    <div className={classes.project}>
      <div className={classes.project_info}>
        <span className={classes.project_title}>{project.name}</span>
        <span className={classes.project_year}>{project.year}</span>
        <p>{project.info}</p>
        <ul className={classes.project_plus}>
          {plus}
          {techs}
        </ul>
        <div className={classes.project_btn_container}>
          <Button text='Source Code' img='icons/github.svg' url={project.source} />
          <Button text='Visit' img='icons/visit.svg' url={project.url} />
        </div>
      </div>
      <div className={classes.img_container}>
        {/* Thumb */}
        <Image
          alt={project.name}
          src={project.thumb}
          src_img={project.img}
          onClickHandler={modalHandler}
        />
      </div>
      <Modal isOpen={modalIsOpen} src={project.img} onClose={() => modalHandler()} />
    </div>
  );
};

export default Project;
