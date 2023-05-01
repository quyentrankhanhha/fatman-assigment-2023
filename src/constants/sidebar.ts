import { DashboardIcon, ResourcesIcon, SettingIcon, VideoLibraryIcon } from './image'

const sidebar = [
  { name: 'Dashboard', icon: DashboardIcon, path: '/' },
  { name: 'Movies', icon: VideoLibraryIcon, path: '/' },
  {
    name: 'Resources',
    icon: ResourcesIcon,
    path: '/people',
    subMenu: [
      { name: 'People', path: '/people' },
      { name: 'Starships', path: '/starships' },
      { name: 'Planets', path: '/planets' }
    ]
  },
  {
    name: 'Settings',
    icon: SettingIcon,
    path: '/',
    subMenu: [
      { name: 'Profile', path: '/' },
      { name: 'Starships', path: '/starships' }
    ]
  }
]

export default sidebar
