import React, { Component, Fragment } from 'react';
import MenuBar from './components/MenuBar'
import AnalysisContainer from './containers/AnalysisContainer'
import './App.css';

class App extends Component {
  state = {
    page: 'modal',
  }

  onClick = (value) => this.setState({page: value})

  render() {
    return (
      <Fragment>
        <header>
          <MenuBar onClick={this.onClick}/>
        </header>
        <div>
          <AnalysisContainer page={this.state.page}/>
        </div>
      </Fragment>  
    );
  }
}

export default App;
