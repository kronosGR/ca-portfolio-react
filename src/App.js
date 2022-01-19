import React from 'react';
import LayoutFirst from './components/layout-first';
import LayoutSecond from './components/layout-second';
import Header from './components/header';
import Title from './components/title';
import { projects } from './data/projects';
import Project from './components/project';
import Button from './components/button';
import LayoutThird from './components/layout-third';

const App = () => {
  const projectsEls = projects.map(project => {
    return <Project key={project.id} project={project}/>
  })
 
  return (
    <>
      <LayoutFirst>
        <h1>Hi, I am Georgios</h1>
        <h2>... a Front-End Developer</h2>
        <h3>...with passion for problem solving and creation</h3>
      </LayoutFirst>
      <LayoutSecond>
        <Header />
        <Title title="Projects"/>
        {projectsEls}
        <Button text="All Projects" img="icons/github.svg" url="https://github.com/kronosGR?tab=repositories"/>
      </LayoutSecond>
      <LayoutThird>
        <Title title="About"/>
      </LayoutThird>
    </>
  );
};
export default App;
