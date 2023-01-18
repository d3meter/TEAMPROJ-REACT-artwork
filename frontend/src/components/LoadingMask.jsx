import React from 'react'
import spinner from "./../pub_img/Ellipsis-4.5s-200px _white.svg"
import "./LoadingMask.css"

function LoadingMask() {
  return (
    <div className='LoadingMask'>
     <img src={spinner} alt="loading" />
    </div>
  )
}

export default LoadingMask