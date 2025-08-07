"use client";
import InitialCurve from './components/InitialCurve';
import Skills from './components/Skills';
import ProjectsPage from './components/Projectss/page';
import FooterPage from './components/Footer/page';
import Object from './components/Object/page';
export default function App() {
  return(
    <div  className='font-["sriracha"]'>
      <InitialCurve/>
      <Object/>
      <ProjectsPage/>
      <Skills/>
      <FooterPage/>
    </div>
  )
}