import React, { Component } from 'react';

import './addItem.css'

export class AddItem extends Component {
  state = {
    btns : []
  }
  onClickHandler = (event) => {
    const name = event.target.name;
    this.props.onClick(name);
  }
  componentWillMount() {
    let theList = []
    for(let item in this.props.items) {
      theList.push(item)
    }
    this.setState({
      btns: theList
    })
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
                    key={btn}
                    className='add-item-group-btn'
                    onClick={this.onClickHandler}
                    name={btn}>
                    {btn}
                  </button>
                ))
              }
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default AddItem
