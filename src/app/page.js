"use client";
// import SplashCursor from '../../bits/SplashCursor/SplashCursor';
// import Paragraph from './components/Paragraph'
// import HomePage from './components/HomePage';
import InitialCurve from './components/InitialCurve';
// import StickyCursor from './components/StickyCursor';
import ParagraphMask from './components/ParagraphMask';
import Foot from './components/Foot';
import Skills from './components/Skills';
import ProjectsPage from './components/Projectss/page';
import FooterPage from './components/Footer/page';
import Navbar from './components/Navbar/page';
// import PixelTrail from '../../bits/PixelTrail/PixelTrail';
export default function App() {
  return(
    <div className='font-["sriracha"]'>
      {/* <InitialCurve/> */}
      <Navbar/>
      {/* <StickyCursor/> */}
      <ParagraphMask/>
      <ProjectsPage/>
      <Skills/>
      {/* <Foot/> */}
      <FooterPage/>

      {/* <HomePage/> */}
      {/* <SplashCursor/> */}
      {/* <Paragraph/> */}
      {/* <PixelTrail/> */}

      
    </div>
  )
}