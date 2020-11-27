import React from 'react'
import BigMap from './BigMap'
// import TestMap from './BigMap'

const WalkList = () => {
  return (

    <>
      <h1>THE WALK LIST WORKS</h1>
      <h4>After you search, this shows the list of the walks </h4>
      {/* <TestMap /> */}
      <BigMap/>
      <div className='big-map'>
        {/* <BigMap containerStyle={{ height: '50em', width: '50em' }}/>r */}

      </div>
    </>

  )
}

export default WalkList
