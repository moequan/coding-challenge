import React from 'react';
import '../scss/App.scss';
import StepZilla from "react-stepzilla";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";
import Step4 from "../components/Step4";
import Step5 from "../components/Step5";



const steps =
    [
      {name: 'Duration', component: <Step1 />},
      {name: 'Personal Details', component: <Step2 />},
      {name: 'Credit Card', component: <Step3 />},
      {name: 'Confirmation', component: <Step4 />},
      {name: 'Success', component: <Step5 />}
    ]


function App() {
  return (
    <div className="App">
      <div className='step-progress'>
        <StepZilla steps={steps}/>
    </div>
    </div>
  );
}

export default App;