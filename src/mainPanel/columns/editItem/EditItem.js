import React, { Component } from 'react';
import EditingItemPresenter from './EditingItemPresenter';
import NoItemSelected from './NoItemSelected';
import EditAsCode from './EditAsCode';
import EditReset from './EditReset';
import EditEnd from './EditEnd';

import './editItem.css';

export class EditItem extends Component {
  state = {
    item: []
  }
  resetHandler = () => {
    const item = this.state.item[0];
    const id = this.props.id;
    this.props.onReset(id, item);
  }
  componentWillReceiveProps(nextProps) {
    if(this.props.id !== '') {
      var item = nextProps.items.filter((item) => (
        item.id === nextProps.id ? true : false
      ));
      this.setState({
        item: item
      });
    }
  }
  render() {
    if(this.props.id !== '') {
      return (
        <React.Fragment>
          <div id="edit-item">
            <h2 className="column-header">
              Edit Item
            </h2>
            <div className="column-body" id="edit-item-body">
              <div id="edit-item-presenter">
                <EditingItemPresenter
                  item={this.state.item[0]}
                  onChange={this.props.onChange} />
              </div>
              <div id="edit-end">
                <EditEnd
                  onClick={this.props.endEdit} />
              </div>
              <div id="edit-reset">
                <EditReset
                  onClick={this.resetHandler} />
              </div>
              <div id="edit-as-code">
                <EditAsCode
                  item={this.state.item[0]} />
              </div>
            </div>
          </div>
        </React.Fragment>
      )
    } else {
      return (
        <React.Fragment>
          <div id="edit-item">
            <h2 className="column-header">
              Edit Item
            </h2>
            <div className="column-body">
              <NoItemSelected />
            </div>
          </div>
        </React.Fragment>
      )
    }
  }
}

export default EditItem