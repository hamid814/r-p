import React, { Component } from 'react'

export class EditAsCode extends Component {
  state = {
    item: '',
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ item: nextProps.item });
  }
  render() {
    return (
      <React.Fragment>
        <h3 id="edit-as-code-header">{'</> '}edit as code</h3>
        <div>
          <textarea id="edit-as-code-textarea" value={''} readOnly />
        </div>
      </React.Fragment>
    )
  }
}

export default EditAsCode
