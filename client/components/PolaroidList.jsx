import React from 'react'
import Polaroid from './Polaroid.jsx'

const PolaroidList = () => {
  return (

    <>
      <h5>The list of the all the polaroids</h5>
      <div className='walks-wrapper'>
        <Polaroid/>
        <Polaroid/>
      </div>{/* end of walk wrapper vdiv */}
    </>
  )
}

export default PolaroidList
