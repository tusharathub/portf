"use client";
// import SplashCursor from '../../bits/SplashCursor/SplashCursor';
// import Paragraph from './components/Paragraph'
// import HomePage from './components/HomePage';
import InitialCurve from './components/InitialCurve';
import StickyCursor from './components/StickyCursor';
import ParagraphMask from './components/ParagraphMask';
// import PixelTrail from '../../bits/PixelTrail/PixelTrail';
export default function App() {
  return(
    <div className='font-["cabinet-grotesk"]'>
      <InitialCurve/>
      <StickyCursor/>
      <ParagraphMask/>

      {/* <HomePage/> */}
      {/* <SplashCursor/> */}
      {/* <Paragraph/> */}
      {/* <PixelTrail/> */}

      
    </div>
  )
}