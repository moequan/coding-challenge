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
        OVERVIEW
        <div className="durationTotal">
          <p>duration</p>
          <p>{subscription.duration}</p>
        </div>
        <div className="sizeTotal">
          <p>gigabytes</p>
          <p>{subscription.gigabytes}</p>
        </div>
        <div className="priceTotal">
          {" "}
          <p>price per month</p>
          <p>2 $ per GB</p>
        </div>
        {subscription.upfrontPayment && (
          <div className="paymentTotal">
            <p>Upfront payment discount (-10%)</p>
            <p>-{upfront}$</p>
          </div>
        )}
        <div className="priceTotal">
          <p>Total</p>
          <p>{price}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { subscription: state.subscription };
};

export default connect(mapStateToProps, {})(Overview);
