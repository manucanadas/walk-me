import React from 'react'
import { connect } from 'react-redux'

import Comments from './Comments.jsx'

const IndividualWalk = (props) => {
  const walkId = props.match.params.name
  const walk = props.walks[walkId]
  
  function timeConvert(num) {
    const hours = (num / 60);
    const rhours = Math.floor(hours);
    const minutes = (hours - rhours) * 60;
    const rminutes = Math.round(minutes);
    return rhours + " hr " + rminutes + " min.";
  }
   
  return (
    <div className='individual-walk-wrapper' >
      <h1 className='individual-walk-main-title' >{walk.title}</h1>
      <div className='individual-walk-inner' >
        <div className='individual-walk-image-wrapper'>
          <img className='individual-walk-image' src={walk.img} alt=""/>
          <img className='individual-walk-image' src="https://via.placeholder.com/600x300" alt=""/>
        </div>
        <div>
          <h3 className='individual-walk-sub-title'>{walk.suburb}</h3>
          <div className='walk-info'>
            <div className='walk-detail'><h4>Distance: {walk.distance / 1000}km</h4></div>
            <div className='walk-detail'><h4>Duration: {timeConvert(walk.duration)}</h4></div>
            <div className='walk-detail'><h4>Difficulty: ⭐⭐</h4></div>
            <button className='text-btn'><h4>Button</h4></button>
          </div>
          <p className='individual-walk-text' >
            {walk.description}
          </p>
        </div>
      </div>
      <Comments/>
    </div>
  )
}

function mapStateToProps(globalState) {
  return {
    walks: globalState.walks
  }
}

export default connect(mapStateToProps)(IndividualWalk)
