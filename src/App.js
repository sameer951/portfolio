
import React from 'react';
import 'antd/dist/antd.css';
import { LayoutComponent } from './components/layout.component';
import { AboutMeComponent } from './components/aboutme.component';
import { SkillsComponent } from './components/skills.domponent';
import { Project } from './components/projects.component';
import { ContactPage } from './components/contactme.component';

function App() {
  return (
    <React.Fragment>
      <LayoutComponent>
        <AboutMeComponent />
        <SkillsComponent />
        <Project />
        <ContactPage />
      </LayoutComponent>
      {/* <MainPage></MainPage> */}
      {/* <Header></Header>
    <Home></Home> */}
    </React.Fragment>
  );
}

export default App;
