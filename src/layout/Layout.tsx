import React from 'react'
import Sidebar from '../components/Sidebar'

interface Props {
  children?: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div>
      <p>test</p>
      <Sidebar />
      <main>{children}</main>
    </div>
  )
}
