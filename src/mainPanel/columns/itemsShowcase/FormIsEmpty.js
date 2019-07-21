import React, { Component } from 'react'

export class FormIsEmpty extends Component {
  render() {
    return (
      <div style={style}>
        <div>no item to show</div>
        <div>add some items to start making form</div>
      </div>
    )
  }
}

const style = {
  textAlign: 'center',
  marginTop: 40
}

export default FormIsEmpty
