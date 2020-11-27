import React from 'react'
import { connect } from 'react-redux'

import Comments from './Comments.jsx'

const IndividualWalk = (props) => {
  const walkId = props.match.params.name
  const walk = props.walks[walkId]

  function timeConvert (num) {
    if (num > 1) {
      return num + 'hrs'
    } else {
      return num + 'hr'
    }
  }

  return (
    walk ? <div className='individual-walk-wrapper' >
      <h1 className='individual-walk-main-title' >{walk.title}</h1>
      <div className='individual-walk-inner' >
        <div className='individual-walk-image-wrapper'>
          <img className='individual-walk-image' src={walk.img} alt=""/>
          <img className='individual-walk-image' src="https://via.placeholder.com/600x300" alt=""/>
        </div>
        <div className='individual-walk-text-wrapper'>
          <h3 className='individual-walk-sub-title'>{walk.suburb}</h3>
          <div className='walk-info'>
            <div className='walk-detail'><h4>Distance: {walk.distance}km</h4></div>
            <div className='walk-detail'><h4>Duration: {timeConvert(walk.duration)}</h4></div>
            <div className='walk-detail'><h4>Difficulty:{ [...Array(walk.difficulty)].map((e, i) => '⭐ ')}
            </h4></div>
          </div>
          <p className='individual-walk-text' >
            {walk.description}
          </p>
          <Comments/>
        </div>
      </div>

    </div> : ''
  )
}

function mapStateToProps (globalState) {
  return {
    walks: globalState.walks
  }
}

export default connect(mapStateToProps)(IndividualWalk)
