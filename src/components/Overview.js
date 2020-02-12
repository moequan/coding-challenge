import React from "react";
import "../scss/App.scss";
import { connect } from "react-redux";

class Overview extends React.Component {
  render() {
    const subscription = this.props.subscription;
    let price = 2 * subscription.gigabytes * subscription.duration;
    const upfront = (10 * price) / 100;
    if (subscription.upfrontPayment) {
      price = price - upfront;
    }
    return (
      <div className="overview">
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
              <p>-{upfront} $</p>
            </div>
          )}
        </div>
        <div className="priceTotal row">
          <p>Total</p>
          <p>{price} $</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { subscription: state.subscription };
};

export default connect(mapStateToProps, {})(Overview);
