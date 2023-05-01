import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { Box } from '@mui/material'
import Header from 'src/components/Header'

interface LayoutProps {
  children?: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <Header handleDrawerToggle={handleDrawerToggle} />
        <Sidebar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
      </Box>

      <main>{children}</main>
    </div>
  )
}
