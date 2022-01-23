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
import Fade from 'react-reveal/Fade';
import Jello from 'react-reveal/Jello';
import ErrorBoundary from './components/error-boundry';

const App = () => {
  const projectsEls = projects.map((project) => {
    return <Project key={project.id} project={project} />;
  });

  return (
    <ErrorBoundary>
      <LayoutFirst>
        <Fade left>
          <h1>Hi, I am Georgios</h1>
        </Fade>
        <Fade right>
          <h2>... a Front-End Developer</h2>
        </Fade>
        <Fade bottom>
          <h3>...with passion for problem solving and creation</h3>
        </Fade>
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
          <Jello>
            <PortfolioImage />
          </Jello>
          <AboutText />
          <Skills />
        </div>
      </LayoutThird>
      <LayoutFourth>
        <Title title='Contact' />
        <Contact />
      </LayoutFourth>
    </ErrorBoundary>
  );
};
export default App;
