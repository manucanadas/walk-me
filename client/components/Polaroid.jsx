import React from 'react'

const Polaroid = () => {
  return (

    <>
      <div className='each-walk'>
          <div className= 'walk-image-and-title'>
            <img className='walk-image'src='https://i.pinimg.com/originals/da/5a/19/da5a19b584d9acc95f9984dc5061239c.jpg' alt="description"/>

            <div className= 'walk-title-div'>
              <span className= 'walk-title' >ARO WALK 45</span>
              <div><h5>Hidden in arvo valley</h5></div>
            </div>
          </div>
          <div className='walk-info'>
            <div className='walk-detail'><h4>Doggy friendly</h4></div>
            <div className='walk-detail'><h4>⭐ ⭐ ⭐</h4></div>
            <button className='text-btn'><h4>Button</h4></button>
          </div>
        </div> {/* end of each walk div */}
    </>
  )
}

export default Polaroid
