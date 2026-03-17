import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './apps/frontend/app/Home'
import Layout from './apps/frontend/app/Layout'
import About from './apps/frontend/modules/aboutus/index'
import Contact from './apps/frontend/modules/contact/index'
import Hospitals from './apps/frontend/modules/hospitals/index'
import KumbhaMela from './apps/frontend/modules/kumbhMela/index'
import NearByPlace from './apps/frontend/modules/nearByPlace/index'
import Tourism from './apps/frontend/modules/tourism/index'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<Hospitals />} />
          <Route path="/tourism" element={<Tourism />} />
          <Route path="/nearby-place" element={<NearByPlace />} />
        <Route path="/kumbh-mela" element={<KumbhaMela />} />
<Route path="/contact" element={<Contact />} />
<Route path="/about" element={<About />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
