import React, { Component } from 'react'

export class EditEnd extends Component {
  render() {
    return (
      <React.Fragment>
        <button id="edit-end-btn" onClick={this.props.onClick}>
          Done
        </button>
      </React.Fragment>
    )
  }
}

export default EditEnd
