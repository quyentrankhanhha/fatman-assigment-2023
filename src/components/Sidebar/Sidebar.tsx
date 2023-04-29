import {
  Toolbar,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  AppBar,
  IconButton,
  Drawer
} from '@mui/material'
import { useState } from 'react'
import sidebar from '../../constants/sidebar'
import { AccountIcon } from '../../constants/image'
import pallette from '../../constants/pallete'
const drawerWidth = 232

interface SidebarProps {
  window?: () => Window
}

export default function Sidebar(props: SidebarProps) {
  const { window } = props
  const [mobileOpen, setMobileOpen] = useState<boolean>(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <div>
      <Toolbar />
      <List>
        {sidebar.map((info) => (
          <ListItem key={info.name}>
            <ListItemButton>
              <ListItemIcon>
                <img src={info.icon} alt='menu' />
              </ListItemIcon>
              <ListItemText
                primary={info.name}
                primaryTypographyProps={{
                  color: 'secondary'
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
        <Divider variant='middle' sx={{ opacity: '0.2', border: '1px solid #FBFBFB' }} />

        <p>a</p>
      </List>
    </div>
  )

  const container = window !== undefined ? () => window().document.body : undefined

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position='fixed'
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          height: '56px',
          ml: { sm: `${drawerWidth}px` },
          background: pallette.black
        }}
      >
        <Toolbar>
          <IconButton
            size='large'
            aria-label='account of current user'
            aria-controls='menu-appbar'
            aria-haspopup='true'
            color='inherit'
          >
            <img src={AccountIcon} alt='account icon' />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component='nav' sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label='mailbox folders'>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant='permanent'
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, background: pallette.black }
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  )
}
