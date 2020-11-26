import React from 'react'
import BigMap from './BigMap'

const WalkList = () => {
  return (

    <>
      <h1>THE WALK LIST WORKS</h1>
      <h4>After you search, this shows the list of the walks </h4>
      <div className='big-map'>
        <BigMap overflow='visible' style="mapbox://styles/mapbox/streets-v8" center={ [174.773926, -41.2964113] } containerStyle={{ height: '50em', width: '50em' }}/>
      </div>
    </>

  )
}

export default WalkList
