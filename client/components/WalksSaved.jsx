import React from 'react'

const WalksSaved = () => {
  return (

    <>
      <h1>THE WALKS SAVED COMP WORKS</h1>
      <h4>Here is a component for all of the walks on a page, including photo, map & a few details </h4>
      <br/><br/><br/>

      <div className='walks-wrapper'>

        <div className='each-walk'>
          <div className= 'walk-image-and-title'>
            <img className='walk-image'src='https://lh3.googleusercontent.com/proxy/eUbikXG0umAQAxlPJOZs_r8aQxq6EOnC6c00S_xgoqXlcgjCp7MVpyHgFrpYctmaVwGOX7wwdHp0FFdV5WJp9bg8QgZj3jshPlvr8UHeSyk8K53CtzsAyMUzixLzoWMK6waqKZnRwdxMdip35ak' alt="description"/>

            <div className= 'walk-title-div'>
              <span className= 'walk-title' >OTARI WILTONS BUSH</span>
              <div><h5>Off Mairangi road</h5></div>
            </div>
          </div>
          <div className='walk-info'>
            <div className='walk-detail'><h4>Doggy friendly</h4></div>
            <div className='walk-detail'><h4>⭐ ⭐ ⭐</h4></div>
            <button className='text-btn'><h4>Button</h4></button>
          </div>
        </div> {/* end of each walk div */}

        <div className='each-walk'>
          <div className= 'walk-image-and-title'>
            <img className='walk-image'src='https://www.doc.govt.nz/globalassets/images/places/northland/waipoua-forest/te-matua-ngahere-walk/walkway-1200.jpg' alt="description"/>

            <div className= 'walk-title-div'>
              <span className= 'walk-title'>SNEAKY LITTLE TRACK</span>
              <div><h5>Actually in Featherston</h5></div>
            </div>
          </div>
          <div className='walk-info'>
            <div className='walk-detail'><h4>Doggy friendly</h4></div>
            <div className='walk-detail'><h4>⭐ ⭐ ⭐ ⭐</h4></div>
            <button className='text-btn'><h4>Button</h4></button>
          </div>
        </div> {/* end of each walk div */}

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

        <div className='each-walk'>
          <div className= 'walk-image-and-title'>
            <img className='walk-image'src='https://resources.stuff.co.nz/content/dam/images/1/t/j/s/s/5/image.related.StuffLandscapeSixteenByNine.710x400.1zn2qp.png/1603139047062.jpg' alt="description"/>

            <div className= 'walk-title-div'>
              <span className= 'walk-title' >THE JUNGLE TRACK</span>
              <div><h5>Newtown shops</h5></div>
            </div>
          </div>
          <div className='walk-info'>
            <div className='walk-detail'><h4>Doggy friendly</h4></div>
            <div className='walk-detail'><h4>⭐ ⭐ ⭐</h4></div>
            <button className='text-btn'><h4>Button</h4></button>
          </div>
        </div> {/* end of each walk div */}

      </div>{/* end of walk wrapper vdiv */}

    </>
  )
}

export default WalksSaved
