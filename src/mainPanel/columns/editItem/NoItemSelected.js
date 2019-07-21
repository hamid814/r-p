import React, { Component } from 'react'

export class NoItemSelected extends Component {
  render() {
    return (
        <div style={style}>
          select an item to start editing
        </div>
    )
  }
}

const style = {
  textAlign: 'center',
  marginTop: 40
}

export default NoItemSelected
