import Home from './Components/Home'
import Navbar from './Components/Pages/Navbar'
import { Routes , Route } from 'react-router-dom'
import EnquiryForm01 from './Components/Pages/EnquiryForm01'
import PopupForm from './Components/Pages/PopupForm'
import EnquiryForm02 from './Components/Pages/EnquiryForm02'
import PrivacyPolicy from './Components/Pages/PrivacyPolicy'
import ContectHome from './Components/ContectPage/ContectHome'

function App() {

  return (
    <div>
  
   
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/enquiry' element={<EnquiryForm01/>}/>
        <Route path='/popupform' element={<PopupForm/>}/>
        <Route path='/contectpage' element={<ContectHome/>}/>
        <Route path='/privacypolicy' element={<PrivacyPolicy/>}/>
      </Routes>
    </div>
  )
}

export default App
