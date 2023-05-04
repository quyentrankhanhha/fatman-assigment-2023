import { Divider, List, Box, Drawer, Container } from '@mui/material'
import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import sidebar from '../../constants/sidebar'
import { LOGO } from '../../constants/image'
import pallette from '../../constants/palette'
import StyledListItem from '../StyledListItem'
import NestedListItem from '../NestedListItem'
import { InitialStateI } from 'src/types/listItem.type'
import size from 'src/constants/size'

interface SidebarProps {
  window?: () => Window
  mobileOpen: boolean
  handleDrawerToggle: () => void
}

const initialState: InitialStateI = Object.fromEntries(sidebar.map((i) => [i.name, false]))

export default function Sidebar(props: SidebarProps) {
  const { window, mobileOpen, handleDrawerToggle } = props
  const [openSubMenu, setOpenSubMenu] = useState(initialState)

  const handleClickSubMenu = (itemName: string) => {
    setOpenSubMenu((o) => ({ ...initialState, [itemName]: !o[itemName] }))
  }

  const drawer = (
    <div>
      <Container sx={{ paddingTop: '24px', textAlign: 'center' }}>
        <img
          src={LOGO}
          alt='logo website'
          aria-labelledby='logo website'
          style={{ color: 'white', fontSize: '14px' }}
        />
      </Container>

      <List component='nav'>
        {sidebar.slice(0, 3).map((info) => {
          if (info.subMenu) {
            return (
              <div key={uuid()}>
                <StyledListItem info={info} handleClickSubMenu={handleClickSubMenu} openSubMenu={openSubMenu} />
                <NestedListItem name={info.name} openSubMenu={openSubMenu} subMenu={info.subMenu} key={uuid()} />
              </div>
            )
          } else {
            return <StyledListItem info={info} key={uuid()} />
          }
        })}
        <Divider variant='middle' sx={{ opacity: '0.2', border: '1px solid #FBFBFB' }} />
        <div key={uuid()}>
          <StyledListItem info={sidebar[3]} handleClickSubMenu={handleClickSubMenu} openSubMenu={openSubMenu} />
          {sidebar[3].subMenu ? (
            <NestedListItem
              name={sidebar[3].name}
              openSubMenu={openSubMenu}
              subMenu={sidebar[3].subMenu}
              key={uuid()}
            />
          ) : (
            <></>
          )}
        </div>
      </List>
    </div>
  )

  const container = window !== undefined ? () => window().document.body : undefined

  return (
    <Box component='nav' sx={{ width: { sm: size.drawerWidth }, flexShrink: { sm: 0 } }}>
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
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: size.drawerWidth,
            bgcolor: pallette.black,
            border: 'none'
          }
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant='permanent'
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: size.drawerWidth,
            bgcolor: pallette.black,
            border: 'none'
          }
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  )
}
