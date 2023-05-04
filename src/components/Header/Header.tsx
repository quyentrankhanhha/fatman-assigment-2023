import { Toolbar, AppBar, IconButton, Typography, Box } from '@mui/material'
import { AccountIcon } from '../../constants/image'
import pallette from '../../constants/palette'
import size from 'src/constants/size'
import MenuIcon from '@mui/icons-material/Menu'

interface HeaderProps {
  handleDrawerToggle: () => void
}

export default function Header(props: HeaderProps) {
  const { handleDrawerToggle } = props
  return (
    <AppBar
      component='nav'
      position='fixed'
      sx={{
        width: { sm: `calc(100% - ${size.drawerWidth}px)` },
        height: `${size.navHeight}px`,
        ml: { sm: `${size.drawerWidth}px` },
        background: pallette.black
      }}
    >
      <Toolbar sx={{ justifyContent: { sm: 'flex-end', xs: 'space-between' } }}>
        <IconButton
          color='inherit'
          aria-label='open drawer'
          edge='start'
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography>Darth</Typography>
          <IconButton
            size='large'
            aria-label='account of current user'
            aria-controls='menu-appbar'
            aria-haspopup='true'
            color='inherit'
          >
            <img
              src={AccountIcon}
              alt='account icon'
              aria-labelledby='account icon'
              style={{ color: 'white', fontSize: '14px' }}
            />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
