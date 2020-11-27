import React from 'react'
import { addCommentToWalkAPI } from '../apis/comments'
import { connect } from 'react-redux'

class AddComment extends React.Component {
  fakeProps = {
    walkId: 4
  }

  state = {
    userId: null,
    text: '',
    walkId: '',
    enjoyment: 1
  }

  componentDidUpdate (prevProps) {
    const oldUser = prevProps.auth.user || {}
    const newUser = this.props.auth.user || {}

    if (oldUser.id !== newUser.id) {
      this.setState({
        userId: this.props.auth.user.id,
        walkId: this.props.walkId
      })
    }
  }

  starChangeHandler = (evt) => {
    this.setState({
      enjoyment: evt.target.value
    })
  }

  textChangeHandler = (evt) => {
    this.setState({
      text: evt.target.value
    })
  }

  submithandler = (evt) => {
    evt.preventDefault()
    addCommentToWalkAPI({ ...this.state })
  }

  render () {
    return (
      <form>
        <select name="rating" onChange={(evt) => this.starChangeHandler(evt)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <input type='text' value={this.state.text} onChange={(evt) => this.textChangeHandler(evt)}
        />
        <button type='submit' onClick={(evt) => this.submithandler(evt)}> Submit </button>
      </form>
    )
  }
}

function mapStateToProps (state) {
  const { auth } = state
  return { auth }
}

export default connect(mapStateToProps)(AddComment)
