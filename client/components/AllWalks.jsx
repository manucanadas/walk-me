import React from 'react'
import { connect } from 'react-redux'
import PolaroidList from './PolaroidList.jsx'

const AllWalks = (props) => {
  return (
    <>
      <h1> ALL WALKS </h1>
      <h4>
        Here is a component for all of the walks on a page in polaroid size ,
        including photo, & a few details{' '}
      </h4>
      <PolaroidList />
      <ul>
        {props.walks.map((walk) => {
          return (
            <>
              <li>{walk.title}: {walk.description}</li>
            </>
          )
        })}
      </ul>
    </>
  )
}

function mapStateToProps (globalState) {
  return {
    walks: globalState.walks
  }
}

export default connect(mapStateToProps)(AllWalks)
