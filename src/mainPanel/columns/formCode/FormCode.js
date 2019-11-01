import React, { Component } from 'react'

class FormCode extends Component {
  render() {
    return (
      <>
        <h2 className='column-header'>
          Your Code
        </h2>
        <div id='final-code' className='column-body'>
          {console.log(this.props.form)}
        </div>
      </>
    )
  }
}

export default FormCode
