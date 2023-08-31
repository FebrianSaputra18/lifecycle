import React from 'react'
import Header from '../component/ui/Header'
import Routers from '../route/Routers'

const Layout = () => {
  return (
    <>
    <Header />
      <div>
        <Routers />
      </div>
    </>
  )
}

export default Layout
