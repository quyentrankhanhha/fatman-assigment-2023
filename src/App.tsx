import useRouteElements from './useRouteElements'
import './index.css'

function App() {
  const routeElements = useRouteElements()

  return <div>{routeElements}</div>
}

export default App
