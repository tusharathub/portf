import SplashCursor from '../../bits/SplashCursor/SplashCursor';
import HomePage from './components/homepage'
export default function App() {
  return(
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
     
      {/* <SplashCursor/> */}
      <HomePage/>
      
    </div>
  )
}