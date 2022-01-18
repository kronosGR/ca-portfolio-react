import React from 'react';
import LayoutFirst from './components/layout-first';
import LayoutSecond from './components/layout-second';
import Header from './components/header';
import Title from './components/title';
import { projects } from './data/projects';
import Project from './components/project';

const App = () => {
  const projectsEls = projects.map(project => {
    return <Project key={project.id} project={project}/>
  })

  console.log(projectsEls)
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
      </LayoutSecond>
    </>
  );
};
export default App;
