import React from 'react';
import LayoutFirst from './components/layout-first';
import LayoutSecond from './components/layout-second';
import Header from './components/header';
import Title from './components/title';
import { projects } from './data/projects';
import Project from './components/project';
import Button from './components/button';
import LayoutThird from './components/layout-third';
import LayoutFourth from './components/layout-fourth';
import PortfolioImage from './components/portfolio-image';
import AboutText from './components/about-text';
import Skills from './components/skills';

const App = () => {
  const projectsEls = projects.map((project) => {
    return <Project key={project.id} project={project} />;
  });

  return (
    <>
      <LayoutFirst>
        <h1>Hi, I am Georgios</h1>
        <h2>... a Front-End Developer</h2>
        <h3>...with passion for problem solving and creation</h3>
      </LayoutFirst>
      <Header />
      <LayoutSecond>
        <Title title='Projects' />
        {projectsEls}
        <Button
          text='All Projects'
          img='icons/github.svg'
          url='https://github.com/kronosGR?tab=repositories'
        />
      </LayoutSecond>
      <LayoutThird>
        <Title title='About' />
        <PortfolioImage />
        <AboutText />
        <Skills />
      </LayoutThird>
      <LayoutFourth>
        <a href='https://github.com/kronosGR' target='_blank' >
          <img src='icons/github.svg' alt='github account' className='contact-img' />
        </a>
        <a
          href='https://www.linkedin.com/in/kronosgr/'
          target='_blank'
          className='contact-img'>
          <img src='icons/linkedin.svg' alt='linkedIn account' />
        </a>
        <a href='mailto:geo.eleo@gmail.com' target='_blank' className='contact-link'>
          geo.elgeo@gmail.com
        </a>
      </LayoutFourth>
    </>
  );
};
export default App;
