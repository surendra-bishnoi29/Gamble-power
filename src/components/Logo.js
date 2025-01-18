import React from 'react'

function Logo(props) {
	const {className} = props
  return (
    <div className=''>
    <img src='https://jaljivnam.s3.ap-south-1.amazonaws.com/gamble-dump/public/logo.png' className={className} />

    </div>
  )
}

export default Logo