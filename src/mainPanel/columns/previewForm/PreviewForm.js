import React, { Component } from 'react';
import PreviewFormItem from './PreviewFormItem';
import NoItemInForm from './NoItemInForm';

import './previewForm.css';

export class PreviewForm extends Component {
  render() {
    const { title, description, submitText, hasReset, resetText } = this.props.info;
    return (
      <>
        <h2 className='column-header'>
          Your Form
        </h2>
        <div id='preview-form' className='column-body'>
          <div className='preview-form-wrapper'>
            {
              title !== ''
                && <h2>{ title }</h2>
            }
            {
              description !== ''
                && <h4>{ description }</h4>
            }
            {
              this.props.form.map(item => (
                <PreviewFormItem key={item.id} item={item} />
              ))
            }
            {
              this.props.form.length === 0
                && <NoItemInForm />
            }
            {
              hasReset
              &&  <input type='reset' value={resetText}/>
            }
            <input type='submit' value={submitText}/>
          </div>
        </div>
      </>
    )
  }
}

export default PreviewForm
