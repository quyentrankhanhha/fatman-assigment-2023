import React from 'react'
import Sidebar from '../components/Sidebar'

interface Props {
  children?: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div>
      <Sidebar />
      <main>{children}</main>
    </div>
  )
}
