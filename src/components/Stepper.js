import React from "react";
import { connect } from "react-redux";

class Stepper extends React.Component {
  render() {
    const page = this.props.currentStep;
    return (
      <div className="ui mini ordered steps">
        <div className={"step " + (page > 0 ? "completed" : "")}>
          <div className="content">
            <div className="title">Duration</div>
            <div className="description">Choose your shipping options</div>
          </div>
        </div>
        <div className={"step " + (page > 1 ? "completed" : "")}>
          <div className="content">
            <div className="title">Personal Info</div>
            <div className="description">Enter billing information</div>
          </div>
        </div>
        <div className={"step " + (page > 2 ? "completed" : "")}>
          <div className="content">
            <div className="title">Personal Info</div>
            <div className="description">Enter billing information</div>
          </div>
        </div>
        <div className={"step " + (page > 3 ? "completed" : "")}>
          <div className="content">
            <div className="title">Personal Info</div>
            <div className="description">Enter billing information</div>
          </div>
        </div>
        <div className={"step " + (page > 4 ? "completed" : "")}>
          <div className="content">
            <div className="title">Personal Info</div>
            <div className="description">Enter billing information</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { currentStep: state.currentStep };
};

export default connect(mapStateToProps, {})(Stepper);
