"use client";
// import SplashCursor from '../../bits/SplashCursor/SplashCursor';
import Paragraph from './components/Paragraph'
// import HomePage from './components/HomePage';
import InitialCurve from './components/InitialCurve';
import StickyCursor from './components/StickyCursor';
// import PixelTrail from '../../bits/PixelTrail/PixelTrail';
export default function App() {
  return(
    <div className='font-["cabinet-grotesk"]'>
      <InitialCurve/>
      <StickyCursor/>
      {/* <HomePage/> */}
      {/* <SplashCursor/> */}
      <Paragraph/>
      {/* <PixelTrail/> */}

      
    </div>
  )
}