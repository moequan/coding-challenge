import React from "react";
import { connect } from "react-redux";
import { handleOverview} from "../actions/";

class OverviewStep extends React.Component {
  render() {
    return (<div>OVERVIEW</div>)
  }
}

const mapStateToProps = state => {
  return { currentStep: state.currentStep };
};

export default connect(mapStateToProps, { handleOverview })(OverviewStep);

