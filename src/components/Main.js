import React from "react";
import { connect } from "react-redux";
import SubscriptionStep from "./SubscriptionStep";
import InfoStep from "./InfoStep";
import CardStep from "./CardStep";
import OverviewStep from "./OverviewStep";
import SuccessMessage from "./SuccessMessage";
import Overview from "./Overview";

class Main extends React.Component {


  render() {
    const page = this.props.currentStep;
    return (
      <>
      
        {page === 1 && <SubscriptionStep></SubscriptionStep>}
        {page === 2 && <InfoStep></InfoStep>}
        {page === 3 && <CardStep></CardStep>}
        {page === 4 && <OverviewStep></OverviewStep>}
        {page === 5 && <SuccessMessage></SuccessMessage>}
        {page > 1 &&  page < 4 && <Overview></Overview>}
      </>
    );
  }
}

const mapStateToProps = state => {
  return { currentStep: state.currentStep };
};

export default connect(mapStateToProps, )(Main);
