import React, { Component } from 'react';

import './addItem.css'

export class AddItem extends Component {
  state = {
    btns : 'email, month, file, time, url, search, radio, tel'
  }
  headerClickHandler = (event) => {
    const groups = document.querySelectorAll('.add-item-group');
    if(event.target.parentElement.classList.contains('opened')) {
      event.target.parentElement.classList.remove('opened');
      event.target.parentElement.classList.add('closed');
    } else if(event.target.parentElement.classList.contains('closed')) {
      for(let group of groups) {
        group.classList.remove('opened');
        group.classList.add('closed');
      }
      event.target.parentElement.classList.add('opened');
      event.target.parentElement.classList.remove('closed');
    }
  }
  onClickHandler = (event) => {
    const name = event.target.name;
    this.props.onClick(name);
  }
  render() {
    return (
      <React.Fragment>
        <div id='add-item'>
          <h2 className='column-header'>
            Add Item
          </h2>
          <div className='column-body'>
            {/* <div className='add-item-group closed'> */}
              <div className='add-item-group-header' onClick={this.headerClickHandler}>
                Fields
              </div>
              <div className='add-item-group-body'>
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
            {/* </div> */}
            {/* <div className='add-item-group closed'> */}
              {/* <div className='add-item-group-header' onClick={this.headerClickHandler}>
                advanced fileds
              </div>
              <div className='add-item-group-body'>
                <button className='add-item-group-btn'>
                  number 1
                </button>
                <button className='add-item-group-btn'>
                  item 2
                </button>
                <button className='add-item-group-btn'>
                  item 3
                </button>
                <button className='add-item-group-btn'>
                  item 4
                </button>
              </div> */}
            {/* </div> */}
            {/* <div className='add-item-group closed'> */}
              {/* <div className='add-item-group-header' onClick={this.headerClickHandler}>
                premaid fileds
              </div>
              <div className='add-item-group-body'>
                <button className='add-item-group-btn'>
                  item 1
                </button>
                <button className='add-item-group-btn'>
                  item 2
                </button>
                <button className='add-item-group-btn'>
                  item 3
                </button>
                <button className='add-item-group-btn'>
                  item 4
                </button>
              </div> */}
            {/* </div> */}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default AddItem
