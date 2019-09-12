import React from 'react'

import './main.scss'

const Main = ({ children }) => {
  return (
    <div className="main">
      <div className="main__top-bg" />
      <header className="main__header">
        <h3>Foreign Exchange</h3>
        <h3>Currency</h3>
      </header>
      <div className="main__content">
        {children}
      </div>
    </div>
  )
}

export default Main
