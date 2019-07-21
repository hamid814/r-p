import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import Header from './header/Header';
import MainPanel from './mainPanel/MainPanel';
import Footer from './footer/Footer';


class App extends Component {
  state = {
    noEffectState: false,
    isUp: false
  }
  componentWillMount() {
    
  }
  
  startAction = () => {
    this.setState({
      isUp: false
    });
  }
  render() {
    return (
      <React.Fragment>
        <div id="header">
          <Header />
        </div>
        <div id="main-body">
          <MainPanel
            onClick={this.startAction} />
        </div>
        <div id="footer">
          <Footer 
            isUp={this.state.isUp} />
        </div>
      </React.Fragment>
    )
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        noEffectState: !this.state.noEffectState
      });
    }, 300);
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);