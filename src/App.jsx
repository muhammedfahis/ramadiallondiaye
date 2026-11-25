import { Route, Routes } from 'react-router-dom'
import SiteLayout from './layouts/SiteLayout'
import NotFound from './pages/NotFound'
import { pages } from './routes'

export default function App() {
  return (
    <SiteLayout>
      <Routes>
        {pages.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </SiteLayout>
  )
}
