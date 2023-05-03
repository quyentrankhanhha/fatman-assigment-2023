import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import { Box, styled } from '@mui/material'
import Header from 'src/components/Header'
import size from 'src/constants/size'

interface MainLayoutProps {
  children?: React.ReactNode
}

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  marginLeft: 0,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: `${size.drawerWidth}px`
  }),
  marginTop: `${size.navHeight}px`
}))

export default function MainLayout({ children }: MainLayoutProps) {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false)
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <>
      <Box>
        <Header handleDrawerToggle={handleDrawerToggle} />
        <Sidebar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
      </Box>

      <Main sx={{ marginLeft: { sm: `${size.drawerWidth}px` } }} open={mobileOpen}>
        {children}
      </Main>
    </>
  )
}
