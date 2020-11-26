import React from 'react'
import Polaroid from './Polaroid.jsx'

const PolaroidList = () => {
  return (

    <>
      <h1>The list of the all the polaroids</h1>
        <div className='walks-wrapper'>
          <Polaroid/>
          <Polaroid/>
        </div>{/* end of walk wrapper vdiv */}
    </>
  )
}

export default PolaroidList
