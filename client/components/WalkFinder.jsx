import React from 'react'
import BigMap from './BigMap'
import WalkList from './WalkList'

const WalkFinder = () => {
  return (

    <>
      <h5>After you search, this shows the Map and list of the walks </h5>
      <div className='big-map'>
        <BigMap />
      </div>
      <WalkList/>
    </>

  )
}

export default WalkFinder
