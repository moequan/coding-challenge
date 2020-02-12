import React from "react";
import { Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { handleDuration, handleGigabyte, handlePayment } from "../actions/";

class SubscriptionStep extends React.Component {
  constructor(props) {
    super(props);
    this.handleDuration = this.handleDuration.bind(this);
    this.handleGigabyte = this.handleGigabyte.bind(this);
    this.handlePayment = this.handlePayment.bind(this);
  }

  handleDuration(e) {
    this.props.handleDuration(parseInt(e.currentTarget.dataset.value));
  }

  handleGigabyte(e) {
    this.props.handleGigabyte(parseInt(e.currentTarget.dataset.value));
  }

  handlePayment(e) {
    this.props.handlePayment();
  }

  render() {
    console.log(this.props);
    return (
      <div className="step">
        <div className="duration">
          <p>How long you want to use the cloud ?</p>
          <div>
            <Button.Group floated="left">
              <Button
                onClick={this.handleDuration}
                data-value="3"
                className={
                  "" + (this.props.subscription.duration === 3 ? "active" : "")
                }
              >
                3
              </Button>
              <Button
                onClick={this.handleDuration}
                data-value="6"
                className={
                  "" + (this.props.subscription.duration === 6 ? "active" : "")
                }
              >
                6
              </Button>
              <Button
                onClick={this.handleDuration}
                data-value="12"
                className={
                  "" + (this.props.subscription.duration === 12 ? "active" : "")
                }
              >
                12
              </Button>
            </Button.Group>
          </div>
        </div>
        <div className="gigabyte">
          <p>How many gigabytes?</p>

          <div>
            <Button.Group floated="left">
              <Button
                onClick={this.handleGigabyte}
                data-value="3"
                className={
                  "" + (this.props.subscription.gigabytes === 3 ? "active" : "")
                }
              >
                3
              </Button>
              <Button
                onClick={this.handleGigabyte}
                data-value="12"
                className={
                  "" + (this.props.subscription.gigabytes === 5 ? "active" : "")
                }
              >
                5
              </Button>
              <Button
                onClick={this.handleGigabyte}
                data-value="10"
                className={
                  "" +
                  (this.props.subscription.gigabytes === 10 ? "active" : "")
                }
              >
                10
              </Button>
              <Button
                onClick={this.handleGigabyte}
                data-value="20"
                className={
                  "" +
                  (this.props.subscription.gigabytes === 20 ? "active" : "")
                }
              >
                20
              </Button>
              <Button
                onClick={this.handleGigabyte}
                data-value="30"
                className={
                  "" +
                  (this.props.subscription.gigabytes === 30 ? "active" : "")
                }
              >
                30
              </Button>
              <Button
                onClick={this.handleGigabyte}
                data-value="50"
                className={
                  "" +
                  (this.props.subscription.gigabytes === 50 ? "active" : "")
                }
              >
                50
              </Button>
            </Button.Group>
          </div>
        </div>
        <div className="payment">
          <p>Upfront payment?</p>
          <Button.Group floated="left">
            <Button
              onClick={this.handlePayment}
              className={
                "" + (this.props.subscription.upfrontPayment ? "active" : "")
              }
            >
              Yes
            </Button>
            <Button
              onClick={this.handlePayment}
              className={
                "" + (!this.props.subscription.upfrontPayment ? "active" : "")
              }
            >
              No
            </Button>
          </Button.Group>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { currentStep: state.currentStep, subscription: state.subscription };
};

export default connect(mapStateToProps, {
  handleDuration,
  handlePayment,
  handleGigabyte
})(SubscriptionStep);
