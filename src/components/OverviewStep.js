import React from "react";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { handleOverview, handleNext, handlePrevious } from "../actions/";

class OverviewStep extends React.Component {
  constructor(props){
    super(props)
    this.handleNext= this.handleNext.bind(this);
    this.handlePrevious= this.handlePrevious.bind(this)
  }
  handlePrevious() {
    this.props.handlePrevious();
  }

  handleNext() {
    this.props.handleNext();
  }

  render() {
    const subscription = this.props.subscription;
    let price = 2 * subscription.gigabytes * subscription.duration;
    const upfront = (10 * price) / 100;
    if (subscription.upfrontPayment) {
      price = price - upfront;
    }
    return (
      <div className="step overviewStep">
        <div className="top">
          <h5>OVERVIEW</h5>
          <div className="durationTotal row">
            <p>Duration</p>
            <p>{subscription.duration} months</p>
          </div>
          <div className="sizeTotal row">
            <p>Gigabytes</p>
            <p>{subscription.gigabytes} GB / month</p>
          </div>
          <div className="monthTotal row">
            <p>Price per month</p>
            <p>2 $ / GB</p>
          </div>
          {subscription.upfrontPayment && (
            <div className="paymentTotal row">
              <p>Upfront payment discount (-10%)</p>
              <p>-{upfront}$</p>
            </div>
          )}
        </div>
        <div className="priceTotal row">
          <p>Total</p>
          <p>{price} $</p>
        </div>
        <div className="actions">
          <Button type="button" onClick={this.handlePrevious}>
            Previous
          </Button>
          <Button primary type="submit" onClick={this.handleNext}>
            Confirm order
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { subscription: state.subscription };
};

export default connect(mapStateToProps, {
  handleOverview,
  handleNext,
  handlePrevious
})(OverviewStep);
