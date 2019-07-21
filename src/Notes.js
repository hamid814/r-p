import React, { Component } from 'react'

export class Notes extends Component {
  state = {
    notes: [
      "add elegant animation to hover of formItem",
      "add elegant animation to when no item selected to edit",
      "readony & required check boxes dont work",
      "have tab in editing item panel",
      "edit doesn't start on first click",
      "arrange properties in formItem",
      "middle database for checking what type of properties this item should have...",
      "drag & drop not working",
      "tabbing in edit item column",
      "to show sth when nothing is in the form",
      "add good animation for add item opening btns",
      "delte <Buttons /> from header",
      "edit as code",
      "third database for fileds that have chooses (like select list & radios)",
      "itemsshowcase goes under footer",
      "isUp state in index.js",
      "name for column headers",
      "close edit btn",
      "first item in itemsshowcase goes behind header",
      "height of columns is hand entered (not with calc)",
      'turn components to smaller components as much as possible (a component must do only "one" job)',
      "delete colors from 'index.ccc'",
      "responsive",
      "notes from main2.js",
      "header box-shadow",
      "in edit item, if value != '' --> placeholder = ''",
      "start serious item by item adding the btns",
      "border-radius: 50px",
      "grid doesn't work with edge",
      "checkbox front text",
      "form submition and reset",
      "repeat password",
      "uuid repeats id in new fields",
      "double check for delete or it can go, but has fast und btn like G-mail",
      "reset doesnt work",
      "clear doesnt work",
      "",
      "",
      "routers",
      "redux",
      "",
      "mbti team",
      "",
      "open accardion :)",
      "current: clone btn id"
    ]
  }
  render() {
    return (
      <React.Fragment>
        {this.state.notes.map((note, index) => {
          return <NotePresenter note={note} key={index} />
        })}
      </React.Fragment>
    )
  }
}

class NotePresenter extends Component {
  render() {
    return (
      <React.Fragment>
        - {this.props.note}<br/>
      </React.Fragment>
    )
  }
}

export default Notes
