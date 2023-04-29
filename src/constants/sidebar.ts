import { DashboardIcon, ResourcesIcon, VideoLibraryIcon } from './image'

const sidebar = [
  { name: 'Dashboard', icon: DashboardIcon, path: '/starship' },
  { name: 'Movies', icon: VideoLibraryIcon, path: '/dashboard' },
  { name: 'Resources', icon: ResourcesIcon, path: '/people' }
] as const

export default sidebar
