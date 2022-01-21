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
import Contact from './components/contact';

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
        <div className='about-container'>
          <PortfolioImage />
          <AboutText />
          <Skills />
        </div>
      </LayoutThird>
      <LayoutFourth>
        <Title title='Contact' />
        <Contact />
      </LayoutFourth>
    </>
  );
};
export default App;
