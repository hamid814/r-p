import React, { Component } from 'react'

export class EditEnd extends Component {
  render() {
    return (
      <React.Fragment>
        <button id="edit-reset-btn" onClick={this.props.onClick}>
          Reset
        </button>
      </React.Fragment>
    )
  }
}

export default EditEnd
