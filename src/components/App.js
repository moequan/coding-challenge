import React from 'react';
import '../scss/App.scss';
import Stepper from '../components/Stepper'
import Main from '../components/Main'


class App extends React.Component {
    render() {
      return (
        <div className="app">
         <Stepper></Stepper>
         <Main></Main>    
        </div>
      );
    }
  }
  
  export default App;