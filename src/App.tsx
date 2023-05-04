import useRouteElements from './useRouteElements'
import './index.css'
import Dashboard from './pages/Dashboard'

function App() {
  const routeElements = useRouteElements()

  return (
    <>
      <Dashboard />
      {routeElements}
    </>
  )
}

export default App
