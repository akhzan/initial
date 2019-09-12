import React from 'react'

const Dropdown = ({ title, options, onClickItem }) => {
  return (
    <div className="dropdown">
      <button className="app-btn --secondary">{title}</button>
      <div className="dropdown-content">
        {
          options && Object.keys(options).map(curr => (
            <button onClick={() => onClickItem(curr)} key={curr}>{curr}</button>
          ))
        }
      </div>
    </div>
  )
}

export default Dropdown
