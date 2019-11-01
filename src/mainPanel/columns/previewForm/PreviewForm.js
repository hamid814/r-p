import React, { Component } from 'react';

import './previewForm.css';

export class PreviewForm extends Component {
  render() {
    const { title, description } = this.props.info;
    return (
      <>
        <h2 className='column-header'>
          Your Form
        </h2>
        <div id='preview-form' className="column-body">
          {
            title !== ''
              && <h2>{ title }</h2>
          }
          {
            description !== ''
              && <h4>{ description }</h4>
          }
        </div>
      </>
    )
  }
}

export default PreviewForm
