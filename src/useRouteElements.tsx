import { useRoutes } from 'react-router-dom'
import Layout from './layout/Layout'
import Resources from './pages/Resources'
import Starship from './pages/Starship'

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: 'resources',
      element: (
        <Layout>
          <Resources />
        </Layout>
      )
    },
    {
      path: 'starship',
      element: (
        <Layout>
          <Starship />
        </Layout>
      )
    }
  ])

  return routeElements
}
