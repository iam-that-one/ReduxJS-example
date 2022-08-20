import React from 'react'

const Header = ({title}) => {
  return (
    <div className='header'>
       <h1 style={{color:'white',textAlign:'center',paddingTop:10}}>{title}</h1>
    </div>
  )
}

export default Header
