import { useRoutes } from 'react-router-dom'
import Starships from './pages/Starships'
import People from './pages/People'
import MainLayout from './layouts/MainLayout'
import ResourcesLayout from './layouts/ResourcesLayout'
import { SearchContextProvider } from './contexts/search.content'
import { Typography } from '@mui/material'

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: 'dashboard',
      element: (
        <MainLayout>
          <Typography>Dashboard</Typography>
        </MainLayout>
      )
    },
    {
      path: 'resources',
      element: (
        <MainLayout>
          <Typography>Resources</Typography>
        </MainLayout>
      )
    },
    {
      path: 'people',
      element: (
        <MainLayout>
          <SearchContextProvider>
            <ResourcesLayout>
              <People />
            </ResourcesLayout>
          </SearchContextProvider>
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
