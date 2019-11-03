import React, { Component } from 'react';

import './addItem.css'

export class AddItem extends Component {
  state = {
    btns : [
      'text',
      'password',
      'button',
      'hidden',
      'checkbox',
      'range',
      'color',
      'date',
      'number',
      'email',
      'file',
      'week',
      'month',
      'radio',
      'time',
      'url'

    ]
  }
  onClickHandler = (event) => {
    const name = event.target.name;
    this.props.onClick(name);
  }
  render() {
    return (
      <>
        <div id='add-item'>
          <h2 className='column-header'>
            Add Item
          </h2>
          <div className='column-body'>
            <div className='add-item-group-header'>
              Fields
            </div>
            <div className='add-item-group-body'>
              {
                this.state.btns.map(btn => (
                  <button
                    className='add-item-group-btn'
                    onClick={this.onClickHandler}
                    name={btn}>
                    {btn}
                  </button>
                ))
              }
              <button
                className='add-item-group-btn'
                onClick={this.onClickHandler}
                name='text'>
                text
              </button>
              <button
                className='add-item-group-btn'
                onClick={this.onClickHandler}
                name='password'>
                password
              </button>
              <button
                className='add-item-group-btn'
                onClick={this.onClickHandler}
                name='button'>
                button
              </button>
              <button
                className='add-item-group-btn'
                onClick={this.onClickHandler}
                name='hidden'>
                hidden
              </button>
              <button
                className='add-item-group-btn'
                onClick={this.onClickHandler}
                name='checkbox'>
                checkbox
              </button>
              <button
                className='add-item-group-btn'
                onClick={this.onClickHandler}
                name='range'>
                range
              </button>
              <button
                className='add-item-group-btn'
                onClick={this.onClickHandler}
                name='color'>
                color
              </button>
              <button
                className='add-item-group-btn'
                onClick={this.onClickHandler}
                name='date'>
                date
              </button>
              <button
                className='add-item-group-btn'
                onClick={this.onClickHandler}
                name='number'>
                number
              </button>
              <button
                className='add-item-group-btn'
                onClick={this.onClickHandler}
                name='email'>
                email
              </button>
              <button
                className='add-item-group-btn'
                onClick={this.onClickHandler}
                name='file'>
                file
              </button>
              <button
                className='add-item-group-btn'
                onClick={this.onClickHandler}
                name='week'>
                week
              </button>
              <button
                className='add-item-group-btn'
                onClick={this.onClickHandler}
                name='month'>
                month
              </button>
              <button
                className='add-item-group-btn'
                onClick={this.onClickHandler}
                name='radio'>
                radio
              </button>
              <button
                className='add-item-group-btn'
                onClick={this.onClickHandler}
                name='time'>
                time
              </button>
              <button
                className='add-item-group-btn'
                onClick={this.onClickHandler}
                name='url'>
                url
              </button>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default AddItem
