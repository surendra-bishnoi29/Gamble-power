import React from 'react'

function Logo(props) {
	const {className} = props
  return (
    <div className=''>
    <img src='logo.png' className={className} />

    </div>
  )
}

export default Logo