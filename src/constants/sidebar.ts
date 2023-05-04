import { DashboardIcon, ResourcesIcon, SettingIcon, VideoLibraryIcon } from './image'

const sidebar = [
  { name: 'Dashboard', icon: DashboardIcon, path: '/dashboard' },
  { name: 'Movies', icon: VideoLibraryIcon, path: '/movies' },
  {
    name: 'Resources',
    icon: ResourcesIcon,
    path: '/resources',
    subMenu: [
      { name: 'People', path: '/people' },
      { name: 'Starships', path: '/starships' },
      { name: 'Planets', path: '/planets' }
    ]
  },
  {
    name: 'Settings',
    icon: SettingIcon,
    path: '/settings',
    subMenu: [{ name: 'Profile', path: '/' }]
  }
]

export default sidebar
