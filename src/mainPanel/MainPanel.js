import React, { Component } from 'react';
import uuid from 'uuid';
import AddItem from './columns/addItem/AddItem';
import ItemsShowcase from './columns/itemsShowcase/ItemsShowcase';
import EditItem from './columns/editItem/EditItem';
import FormCode from './columns/formCode/FormCode';
import PreviewForm from './columns/previewForm/PreviewForm';
import FormSetting from './columns/formSetting/FormSetting';
import FormPanel from './columns/formPanel/FormPanel';
import ContactMe from '../contact/ContactMe';

import './mainPanel.css';

export class MainPanel extends Component {
  state = {
    formItems: [
      {
        id: uuid.v4(),
        name: 'name of btn', // is title of that btn
        fieldName: 'name', // for post and get methods
        for: 'the attr for label',
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
        idname: 'some-id',
        required: true,
        readOnly: false,
        hasMaxChar: false,
        maxChar: '',
        description: '',
        classname: 'hey',
        value: '',
        title: 'tttttt',
        placeHolder: 'say sth'
      },
      {
        id: uuid.v4(),
        name: 'nme of btn',
        type: 'password',
        label: 'another title',
        idname: 'id-here',
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
    formInfo: {
      title: 'Form title',
      submitText: 'Sumbit',
      hasReset: false,
      resetText: 'Reset',
      description: 'You can enter a small description here',
      action: '',
      method: ''
    },
    fieldTypes : {
      text : {
        name: '',
        type: 'text',
        editValueInputType: 'text',
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
        name: '',
        type: 'password',
        editValueInputType: 'text',
        label: 'untitled',
        idname: '',
        required: false,
        readOnly: false,
        hasMaxChar: false,
        maxChar: '',
        description: '',
        classname: '',
        value: '',
        placeHolder: 'Enter your password'
      },
      button: {
        name: '',
        type: 'button',
        editValueInputType: 'text',
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
        name: '',
        type: 'hidden',
        editValueInputType: 'text',
        label: 'untitled',
        idname: '',
        required: false,
        readOnly: false,
        description: '',
        classname: '',
        value: '',
      },
      checkbox: {
        name: '',
        type: 'checkbox',
        editValueInputType: 'checkbox',
        label: 'untitled',
        idname: '',
        required: false,
        readOnly: false,
        description: '',
        classname: '',
        value: '',
        isChecked: false,
        checkText: 'text',
      },
      range: {
        name: '',
        type: 'range',
        editValueInputType: 'number',
        label: 'untitled',
        idname: '',
        required: false,
        readOnly: false,
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
        name: '',
        type: 'color',
        editValueInputType: 'color',
        label: 'untitled',
        idname: '',
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
        name: '',
        type: 'date',
        editValueInputType: 'date',
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
      number: {
        name: '',
        type: 'number',
        editValueInputType: 'number',
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
      email: {
        name: '',
        type: 'email',
        editValueInputType: 'email',
        label: 'Email',
        idname: '',
        required: false,
        readOnly: false,
        hasMaxChar: false,
        maxChar: '',
        description: '',
        classname: '',
        value: '',
        placeHolder: 'enter your email'
      },
      file : {
        name: '',
        fieldName: 'myFile',
        type: 'file',
        editValueInputType: 'none',
        label: 'untitled',
        idname: '',
        required: false,
        readOnly: false,
        hasMaxChar: false,
        maxChar: '',
        description: 'description',
        classname: '',
        title: '',
      },
      week : {
        name: '',
        fieldName: '',
        type: 'week',
        editValueInputType: 'week',
        label: 'untitled',
        idname: '',
        required: false,
        readOnly: false,
        description: 'description',
        classname: '',
        value: '',
        placeHolder: '',
        title: '',
      },
      month : {
        name: '',
        fieldName: '',
        editValueInputType: 'month',
        type: 'month',
        label: 'untitled',
        idname: '',
        required: false,
        readOnly: false,
        description: 'description',
        classname: '',
        value: '',
        title: '',
      },
      radio : {
        name: '',
        fieldName: '',
        type: 'radio',
        editValueInputType: 'radio',
        label: 'untitled',
        idname: '',
        required: false,
        readOnly: false,
        description: 'description',
        classname: '',
        title: '',
      },
      time : {
        name: '',
        fieldName: '',
        type: 'time',
        editValueInputType: 'time',
        label: 'untitled',
        idname: '',
        required: false,
        readOnly: false,
        description: 'description',
        classname: '',
        value: '',
        title: 'title',
      },
      url : {
        name: '',
        fieldName: '',
        type: 'url',
        editValueInputType: 'url',
        label: 'untitled',
        idname: '',
        required: false,
        readOnly: false,
        description: 'description',
        classname: '',
        value: '',
        placeHolder: 'Enter url',
        title: '',
      },
    },
    activeId: '',
    formStatus: 'preview' // values : edit, setting, preview, code, contact
  }
  setFormStatus = (formStatus) => {
    this.setState({
      formStatus
    });
  }
  onAdd = (name) => {
    const newItem = {
      id: uuid.v4(),
      name: this.state.fieldTypes[name].name,
      type: this.state.fieldTypes[name].type,
      label: this.state.fieldTypes[name].label,
      editValueInputType: this.state.fieldTypes[name].editValueInputType,
      idname: this.state.fieldTypes[name].idname,
      required: this.state.fieldTypes[name].required,
      readOnly: this.state.fieldTypes[name].readOnly,
      hasMaxChar: this.state.fieldTypes[name].hasMaxChar,
      maxChar: this.state.fieldTypes[name].maxChar,
      description: this.state.fieldTypes[name].description,
      classname: this.state.fieldTypes[name].classname,
      value: this.state.fieldTypes[name].value,
      placeHolder: this.state.fieldTypes[name].placeHolder,
      isChecked: this.state.fieldTypes[name].isChecked,
      checkText: this.state.fieldTypes[name].checkText,
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
  formInfoSetter = (info, value) => {
    this.setState({
      formInfo: {
        ...this.state.formInfo,
        [info]: value
      }
    });
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

  setContactMe = () => {
    if(this.state.formStatus === 'contact') {
      this.setState({
        formStatus: localStorage.getItem('lastFormStatus')
          ? localStorage.getItem('lastFormStatus')
          : 'edit'
      })
    } else {
      localStorage.setItem('lastFormStatus', this.state.formStatus)
      this.setState({
        formStatus: 'contact'
      })
    }
  }

  render() {
    return (
      <>
        <div id='main-panel' className={`${this.state.formStatus === 'edit' ? 'grid-4-cul' : this.state.formStatus === 'contact' ? 'grid-1-cul' : 'grid-2-cul'}`} onClick={this.onClickHandler}>
          <div className={`column ${this.state.formStatus !== 'edit' && 'd-n'}`}>
            <AddItem
              onClick={this.onAdd} />
          </div>
          <div className={`column ${this.state.formStatus !== 'edit' && 'd-n'}`}>
            <ItemsShowcase
              items={this.state.formItems}
              activeIdNumber={this.state.activeId}
              onClick={this.startEdit}
              onClear={this.onClear} />
          </div>
          <div className={`column ${this.state.formStatus !== 'edit' && 'd-n'}`}>
            <EditItem
              items={this.state.formItems}
              id={this.state.activeId}
              onChange={this.onEdit}
              endEdit={this.endEdit}
              onReset={this.resetHandler} />
          </div>
          <div className={`column ${this.state.formStatus !== 'setting' && 'd-n'}`}>
            <FormSetting
              info={this.state.formInfo}
              set={this.formInfoSetter} />
          </div>
          <div className={`column ${this.state.formStatus !== 'preview' && 'd-n'}`}>
            <PreviewForm
              info={this.state.formInfo}
              form={this.state.formItems} />
          </div>
          <div className={`column ${this.state.formStatus !== 'code' && 'd-n'}`}>
            <FormCode
              info={this.state.formInfo}
              form={this.state.formItems} />
          </div>
          <div className={`column ${this.state.formStatus === 'contact' && 'd-n'}`}>
            <FormPanel
              onClick={this.setFormStatus}
              formStatus={this.state.formStatus} />
          </div>
          <div id='contact-me' className={`column ${this.state.formStatus !== 'contact' && 'd-n'}`}>
            <ContactMe />
          </div>
        </div>
        <div id='contact-me-flag' onClick={this.setContactMe}>
          {
            this.state.formStatus !== 'contact'
              ? 'contact me'
              : 'back to form'
          }
        </div>
      </>
    )
  }
}

export default MainPanel
