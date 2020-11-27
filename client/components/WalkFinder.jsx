import React from 'react'
import BigMap from './BigMap'
import WalkList from './WalkList'

const WalkFinder = () => {
  return (

    <>
      <h5>After you search, this shows the Map and list of the walks </h5>
      <div className='big-map'>
        <BigMap overflow='visible' style="mapbox://styles/mapbox/streets-v8" center={ [174.773926, -41.2964113] } containerStyle={{ height: '50em', width: '50em' }}/>
      </div>
      <WalkList/>
    </>

  )
}

export default WalkFinder
