import React, { Component } from 'react';
import ClearForm from './ClearForm';
import FormItem from './FormItem';
import FormIsEmpty from './FormIsEmpty';

import './ItemsShowcase.css';

export class ItemsShowcase extends Component {
  render() {
    if(this.props.items.length !== 0) {
      return (
        <React.Fragment>
          <div id="items-showcase">
            <h2 className="column-header">
              Items Showcase
                <ClearForm
                  onClick={this.props.onClear} />
            </h2>
            <div className="column-body">
              {
                this.props.items.map((item) => (
                  <FormItem
                    key={item.id}
                    item={item}
                    activeIdNumber={this.props.activeIdNumber}
                    onClick={this.props.onClick} />
                ))
              }
            </div>
          </div>
        </React.Fragment>
      )
    } else if(this.props.items.length === 0) {
      return (
        <React.Fragment>
          <div id="items-showcase">
            <h2 className="column-header">
              Items Showcase
            </h2>
            <div className="column-body">
              <FormIsEmpty />
              
            </div>
          </div>
        </React.Fragment>
      )
    }
  }
}

export default ItemsShowcase



