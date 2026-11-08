import { Navigate, Route, Routes } from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home'
import ServicePage from './pages/ServicePage'
import UeberUns from './pages/UeberUns'
import Kontakt from './pages/Kontakt'
import Impressum from './pages/Impressum'
import Datenschutz from './pages/Datenschutz'
import NotFound from './pages/NotFound'
import { serviceOrder, servicePaths } from './lib/site'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        {serviceOrder.map((slug) => (
          <Route key={slug} path={servicePaths[slug]} element={<ServicePage key={slug} slug={slug} />} />
        ))}
        {/* Vehicle technology was dropped in the 2026 brief */}
        <Route path="/fahrzeugtechnik" element={<Navigate to="/" replace />} />
        <Route path="/ueber-uns" element={<UeberUns />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
