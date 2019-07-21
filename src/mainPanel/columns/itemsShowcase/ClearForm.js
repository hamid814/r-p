import React, { Component } from 'react'

export class ClearForm extends Component {
  state = {
    check: false
  }
  doubleCheckClear = () => {
    if(this.state.check === true) {
      this.props.onClick();
    } else {
      this.setState({
        check: true
      });
    }
  }
  mouseoutFunc = () => {
    this.setState({
      check: false
    });
  }
  render() {
    return (
      <React.Fragment>
        <div id="clear-form-btn" onClick={this.doubleCheckClear} onMouseOut={this.mouseoutFunc}>
          {this.state.check ? 'Are you sure?' : 'Clear Form'}
        </div>
      </React.Fragment>
    )
  }
}

export default ClearForm
