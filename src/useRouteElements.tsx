import { useRoutes } from 'react-router-dom'
import Resources from './pages/Resources'
import Starship from './pages/Starship'
import Layout from './layout'

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '/',
      element: (
        <Layout>
          <Resources />
        </Layout>
      )
    },
    {
      path: 'people',
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
