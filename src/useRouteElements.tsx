import { useRoutes } from 'react-router-dom'
import Starships from './pages/Starships'
import People from './pages/People'
import MainLayout from './layouts/MainLayout'
import ResourcesLayout from './layouts/ResourcesLayout'

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: '/',
      element: (
        <MainLayout>
          <ResourcesLayout />
        </MainLayout>
      )
    },
    {
      path: 'resources',
      element: (
        <MainLayout>
          <ResourcesLayout />
        </MainLayout>
      )
    },

    {
      path: 'people',
      element: (
        <MainLayout>
          <ResourcesLayout>
            <People />
          </ResourcesLayout>
        </MainLayout>
      )
    },
    {
      path: 'starships',
      element: (
        <MainLayout>
          <ResourcesLayout>
            <Starships />
          </ResourcesLayout>
        </MainLayout>
      )
    }
  ])

  return routeElements
}
