import React, { Component } from 'react';
import uuid from 'uuid';
import AddItem from './columns/addItem/AddItem';
import ItemsShowcase from './columns/itemsShowcase/ItemsShowcase';
import EditItem from './columns/editItem/EditItem';
import FormPanel from './columns/formPanel/FormPanel';

import './mainPanel.css';

export class MainPanel extends Component {
  state = {
    formItems: [
      {
        id: uuid.v4(),
        name: 'name of btn', // is title of that btn
        type: 'text',
        label: 'untitled',
        idname: 'id',
        required: false,
        readOnly: true,
        hasMaxChar: false,
        maxChar: '',
        description: 'description',
        classname: 'class',
        value: 'value',
        placeHolder: 'placeHolder',
        title: 'title',
        hasSpecialChar: false,
        specialCharPattern: ''
      },
      {
        id: uuid.v4(),
        name: 'new name',
        type: 'text',
        label: 'new title',
        idname: 'some id',
        required: true,
        readOnly: false,
        hasMaxChar: false,
        maxChar: '',
        description: '',
        classname: 'hey',
        value: '',
        placeHolder: 'say sth'
      },
      {
        id: uuid.v4(),
        name: 'nme of btn',
        type: 'password',
        label: 'another title',
        idname: 'id',
        required: true,
        readOnly: false,
        hasMaxChar: false,
        maxChar: '',
        description: 'and there it goes',
        classname: 'dadadada',
        value: 'this is a value',
        placeHolder: ''
      }
    ],
    fieldTypes : {
      text : {
        id: '',
        name: 'text input',
        type: 'text',
        label: 'untitled',
        idname: '',
        required: false,
        readOnly: false,
        hasMaxChar: false,
        maxChar: '',
        description: '',
        classname: '',
        value: '',
        placeHolder: ''
      },
      password: {
        // id: uuid.v4(),
        name: 'name of btn',
        type: 'text',
        label: 'untitled',
        idname: '',
        required: false,
        readOnly: false,
        hasMaxChar: false,
        maxChar: '',
        description: '',
        classname: '',
        value: '',
        placeHolder: ''
      },
      button: {
        // id: uuid.v4(),
        name: 'button',
        type: 'button',
        label: 'untitled',
        idname: '',
        required: false,
        readOnly: false,
        hasMaxChar: false,
        maxChar: '',
        description: '',
        classname: '',
        value: 'new button',
        placeHolder: ''
      },
      hidden: {
        // id: uuid.v4(),
        name: 'hidden field',
        type: 'hidden',
        label: 'untitled',
        idname: 'id',
        required: false,
        readOnly: false,
        hasMaxChar: false,
        maxChar: '',
        description: '',
        classname: '',
        value: '',
        placeHolder: ''
      },
      checkbox: {
        // id: uuid.v4(),
        name: 'checkbox',
        type: 'checkbox',
        label: 'untitled',
        idname: 'id',
        required: false,
        readOnly: false,
        hasMaxChar: false,
        maxChar: '',
        description: '',
        classname: '',
        value: '',
        isChecked: false,
        placeHolder: ''
      },
      range: {
        name: 'range field',
        type: 'range',
        label: 'untitled',
        idname: 'id',
        required: false,
        readOnly: false,
        hasMaxChar: false,
        maxChar: '',
        hasMin: false,
        min: '',
        hasmax: false,
        max: '',
        hasStep: false,
        step: '',
        description: '',
        classname: '',
        value: '',
        placeHolder: ''
      },
      color: {
        name: 'color field',
        type: 'color',
        label: 'untitled',
        idname: 'id',
        required: false,
        readOnly: false,
        hasMaxChar: false,
        maxChar: '',
        description: '',
        classname: '',
        value: '#ffffff',
        placeHolder: ''
      },
      date: {
        // id: uuid.v4(),
        name: 'date field',
        type: 'date',
        label: 'untitled',
        idname: 'id',
        required: false,
        readOnly: false,
        hasMaxChar: false,
        maxChar: '',
        description: '',
        classname: '',
        value: '',
        placeHolder: ''
      },
      number: {
        // id: uuid.v4(),
        name: 'number field',
        type: 'number',
        label: 'untitled',
        idname: 'id',
        required: false,
        readOnly: false,
        hasMaxChar: false,
        maxChar: '',
        description: '',
        classname: '',
        value: '',
        placeHolder: ''
      }
    },
    activeId: ''
  }
  onAdd = (name) => {
    const newItem = {
      id: uuid.v4(),
      name: this.state.fieldTypes[name].name,
      type: this.state.fieldTypes[name].type,
      label: this.state.fieldTypes[name].label,
      idname: this.state.fieldTypes[name].idname,
      required: this.state.fieldTypes[name].required,
      readOnly: this.state.fieldTypes[name].readOnly,
      hasMaxChar: this.state.fieldTypes[name].hasMaxChar,
      maxChar: this.state.fieldTypes[name].maxChar,
      description: this.state.fieldTypes[name].description,
      classname: this.state.fieldTypes[name].classname,
      value: this.state.fieldTypes[name].value,
      placeHolder: this.state.fieldTypes[name].placeHolder,
      sofp: this.state.fieldTypes[name].sofp
    };

    // FOR LOPING THROIGH AN OBJECT
    // for (var property in object) {
    //   if (object.hasOwnProperty(property)) {
    //       // do stuff
    //   }
    // }

    this.setState({
      formItems: [...this.state.formItems, newItem]
    });
  }
  startEdit = (id, action, item) => {
    if(action === 'edit') {
      this.setState({
        activeId: id
      })
    } else if(action === 'delete') {
      this.deleteHandler(id);
    } else if(action === 'clone') {
      this.cloneHandler(item);
    } else if(action === 'reset') {
      this.resetHandler(id, item);
    }
  }
  onClear = () => {
    this.setState({
      formItems: [],
      activeId: ''
    });
  }
  deleteHandler = (id) => {
    this.setState({
      formItems: [...this.state.formItems.filter(item => item.id !== id)],
      activeId: this.state.activeId === id ? '' : this.state.activeId
    });
  }
  cloneHandler = (passedItem) => {
    const newItem = {
      id: uuid.v4(),
      name: passedItem.name,
      type: passedItem.type,
      label: passedItem.label,
      required: passedItem.required,
      readOnly: passedItem.readOnly,
      hasMaxChar: passedItem.hasMaxChar,
      maxChar: passedItem.maxChar,
      description: passedItem.description,
      classname: passedItem.classname,
      value: passedItem.value,
      placeHolder: passedItem.placeHolder
    };
    this.setState({
      formItems: [...this.state.formItems, newItem]
    });
  }
  onEdit = (id, name, value) => {
    this.setState({
      formItems: this.state.formItems.map((item) => {
        if(item.id === id) {
          item[name]= value
        }
        return item;
      })
    });
  }
  endEdit = () => {
    this.setState({
      activeId: ''
    });
  }
  resetHandler = (id, item) => {
    // i think it doesnt need the item, every thing is always to this.state saved, so... just the id...
  }
  formPanelClicked = (action) =>  {
    if(action === 'previewform') {
      this.previewform();
    } else if(action === 'formsetting') {
      this.formsetting();
    } else if(action === 'generatecode') {
      this.generatecode();
    }
  }
  previewform = () => {
    
  }
  formsetting = () => {
    
  }
  generatecode = () => {
    
  }
  // for shrink and expand the footer
  onClickHandler = () => {
    this.props.onClick();
  }
  componentWillMount() {
    this.setState({
      activeId : this.state.formItems[0].id
    });
  }
  render() {
    return (
      <React.Fragment>
        <div id="main-panel" onClick={this.onClickHandler}>
          <div className="column">
            <AddItem
              onClick={this.onAdd} />
            <FormPanel
              onClick={this.formPanelClicked} />
          </div>
          <div className="column">
            <ItemsShowcase
              items={this.state.formItems}
              activeIdNumber={this.state.activeId}
              onClick={this.startEdit}
              onClear={this.onClear} />
            </div>
          <div className="column">
            <EditItem
              items={this.state.formItems}
              id={this.state.activeId}
              onChange={this.onEdit}
              endEdit={this.endEdit}
              onReset={this.resetHandler} />
          </div>
          {/* <div className="column">
            <FormPanel />
          </div> */}
        </div>
      </React.Fragment>
    )
  }
}

export default MainPanel
