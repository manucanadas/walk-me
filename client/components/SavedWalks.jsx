import React from 'react'
import PolaroidList from './PolaroidList.jsx'
import{fetchCompletedWalks} from '../actions/index'
import { connect } from 'react-redux'

class SavedWalks extends React.Component{
  

 componentDidMount () {
    this.props.dispatch(fetchCompletedWalks())
  }
  
  render (){

    return (
  
      <>
        <h1>THE WALKS SAVED COMP WORKS</h1>
        <h4>Here is a component for all of the walks on a page, including photo, & a few details </h4>
        <PolaroidList/>
        <br/><br/><br/>
  
        <ul>
        {this.props.completedWalks.map((walk)=>
          <li key={walk}>{walk.title}</li>
        )}
        </ul>
      </>
    )


  }
  
}

function mapStateToProps (globalState) {
  return {
    completedWalks: globalState.completedWalks
  }
}
export default connect(mapStateToProps)(SavedWalks)