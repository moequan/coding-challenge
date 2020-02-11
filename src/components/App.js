import React from 'react';
import '../scss/App.scss';
import Stepper from '../components/Stepper'
import Overview from '../components/Overview'
import Main from '../components/Main'


class App extends React.Component {
    render() {
      return (
        <div className="app">
         <Stepper></Stepper> 
         <Overview></Overview>
         <Main></Main>    
      
        </div>
      );
    }
  }
  
  export default App;