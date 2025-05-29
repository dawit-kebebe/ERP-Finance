import Header from '@/app/layouts/Header';
import { Sidebar } from '@/app/layouts/Sidebar';
import React from 'react'

type Props = Readonly<{
	children: React.ReactNode;
}>

const DashboardLayout = ({children}: Props) => {
  return (
    <>
    <Header />
    <Sidebar />
    {children}
    </>
  )
}

export default DashboardLayout