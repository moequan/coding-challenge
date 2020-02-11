import React from "react";
import { handleNext, handlePrevious } from "../actions/";
import { connect } from "react-redux";

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
      console.log(this.props)
    return (
      <>
        <h1>MAIN</h1>
        <div onClick={this.nextStep}>NEXT</div>
        <div onClick={this.previousStep}>Previous</div>
      </>
    );
  }
}

const mapStateToProps = state => {
    
  return { currentStep: state.currentStep };
};

export default connect(mapStateToProps, { handleNext, handlePrevious })(Main);
