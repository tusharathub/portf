"use client";
// import SplashCursor from '../../bits/SplashCursor/SplashCursor';
import Paragraph from './components/Paragraph'
import HomePage from './components/HomePage';
// import PixelTrail from '../../bits/PixelTrail/PixelTrail';
export default function App() {
  return(
    <div className='font-["cabinet-grotesk"]'>
      <HomePage/>
      {/* <SplashCursor/> */}
      <Paragraph/>
      {/* <PixelTrail/> */}
    </div>
  )
}