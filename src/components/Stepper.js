import React from "react";
import { connect } from "react-redux";

class Stepper extends React.Component {
  render() {
    const page = this.props.currentStep;
    return (
      <div className="ui mini ordered steps">
        <div className={"step " + (page > 0 ? "active" : "")}>
          <div className="content">
            <div className="title">Duration</div>
            <div className="description">Choose your duration</div>
          </div>
        </div>
        <div className={"step " + (page > 1 ? "active" : "")}>
          <div className="content">
            <div className="title">Personal Info</div>
            <div className="description">Enter personal info</div>
          </div>
        </div>
        <div className={"step " + (page > 2 ? "active" : "")}>
          <div className="content">
            <div className="title">Credit-card Info</div>
            <div className="description">Enter Credit Card Info</div>
          </div>
        </div>
        <div className={"step " + (page > 3 ? "active" : "")}>
          <div className="content">
            <div className="title">Confirmation</div>
            <div className="description">Your order </div>
          </div>
        </div>
        <div className={"step " + (page > 4 ? "active" : "")}>
          <div className="content">
            <div className="title">Success!</div>
            <div className="description"></div>
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
