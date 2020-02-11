import React from "react";
import { handleNext, handlePrevious } from "../actions/";
import { connect } from "react-redux";
import SubscriptionStep from "./SubscriptionStep";
import InfoStep from "./InfoStep";
import CardStep from "./CardStep";
import OverviewStep from "./OverviewStep";
import SuccessMessage from "./SuccessMessage"

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.nextStep = this.nextStep.bind(this);
    this.previousStep = this.previousStep.bind(this);
  }

  nextStep() {
    this.props.handleNext();
  }
  previousStep() {
    this.props.handlePrevious();
  }

  render() {
    const page = this.props.currentStep;
    return (
      <>
        <h1>MAIN</h1>
        {page === 1 && <SubscriptionStep></SubscriptionStep>}
        {page === 2 && <InfoStep></InfoStep>}
        {page === 3 && <CardStep></CardStep>}
        {page === 4 && <OverviewStep></OverviewStep>}
        {page === 5 && <SuccessMessage></SuccessMessage>}



        <div className="actions">
          <button onClick={this.nextStep}>NEXT</button>
          <button onClick={this.previousStep}>Previous</button>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return { currentStep: state.currentStep };
};

export default connect(mapStateToProps, { handleNext, handlePrevious })(Main);
