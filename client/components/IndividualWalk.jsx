import React from 'react'
import { connect } from 'react-redux'
import AddComment from './AddComment.jsx'

import Comments from './Comments.jsx'

const IndividualWalk = () => {
  return (
    <div className='individual-walk-wrapper' >
      <h1 className='individual-walk-main-title' >Lorem ipsum dolor sit amet.</h1>
      <div className='individual-walk-inner' >
        <div className='individual-walk-image-wrapper'>
          <img className='individual-walk-image' src="https://via.placeholder.com/600x300" alt=""/>
          <img className='individual-walk-image' src="https://via.placeholder.com/600x300" alt=""/>
        </div>
        <div>
          <h3 className='individual-walk-sub-title'>Lorem ipsum dolor sit amet.</h3>
          <div className='walk-info'>
            <div className='walk-detail'><h4>Doggy friendly</h4></div>
            <div className='walk-detail'><h4>⭐ ⭐ ⭐ ⭐</h4></div>
            <button className='text-btn'><h4>Button</h4></button>
          </div>
          <p className='individual-walk-text' >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat turpis in ligula venenatis viverra. Integer auctor dui vitae pulvinar lobortis. Etiam cursus justo et dui tincidunt, sit amet facilisis purus congue. Vivamus vel gravida nulla. Quisque tincidunt ipsum sit amet mi sollicitudin, id aliquet erat viverra. In condimentum magna vel ipsum luctus rhoncus. Quisque sapien massa, gravida vel ex ac, congue ornare augue. Morbi et pulvinar odio, vel posuere diam. Phasellus eleifend tellus et egestas auctor. Sed ut molestie lacus. <br />

              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet facilisis metus. In aliquam vulputate tempus. Aliquam ultrices purus quis quam accumsan sollicitudin. Nulla ut lorem velit. Morbi tortor sapien, consequat at quam sed, dapibus hendrerit nisi. Mauris pretium placerat tortor a sagittis. Aenean dignissim molestie pharetra. Nulla eleifend elit lacinia vulputate ullamcorper. <br />

              Nunc venenatis dignissim nisi, eget vestibulum odio cursus ut. Quisque vitae cursus nulla. Aenean sed arcu ut urna aliquam mattis ultrices id leo. Nullam tempus, enim id egestas porta, ipsum risus pellentesque purus, a congue neque eros malesuada velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam id enim rutrum, efficitur lacus ac, pharetra tortor. Quisque ut libero eget metus interdum rhoncus. Quisque ut arcu quis mauris fringilla rhoncus suscipit vel urna. Proin eu nunc malesuada, imperdiet elit eu, dapibus velit. Nullam id diam ut enim viverra eleifend. <br />

              Sed pulvinar mi ut massa accumsan, nec dignissim orci bibendum. Morbi condimentum eget sapien eget convallis. Sed in velit dolor. Praesent.
          </p>
        </div>
      </div>
      <AddComment/>
      <Comments/>
    </div>
  )
}

export default connect()(IndividualWalk)
