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
    this.props.handleDuration(e.currentTarget.dataset.value);
    e.target.classList.className = "active" ? "" : "active";
  }

  handleGigabyte(e) {
    this.props.handleGigabyte(e.currentTarget.dataset.value);
    e.target.classList.className = "active" ? "" : "active";
  }

  handlePayment(e) {
    this.props.handlePayment(e.currentTarget.dataset.value);
    e.target.classList.className = "active" ? "" : "active";
  }

  render() {
    return (
      <div className="step">
        <div className="duration">
          <p>How long you want to use the cloud ?</p>
          <div>
            <Button.Group floated="left">
              <Button onClick={this.handleDuration} data-value="3">
                3
              </Button>
              <Button onClick={this.handleDuration} data-value="6">
                6
              </Button>
              <Button onClick={this.handleDuration} data-value="12" active>
                12
              </Button>
            </Button.Group>
          </div>
        </div>
        <div className="gigabyte">
          <p>How many gigabytes?</p>

          <div>
            <Button.Group floated="left">
              <Button>3</Button>
              <Button active>5</Button>
              <Button>10</Button>
              <Button>20</Button>
              <Button>30</Button>
              <Button>50</Button>
            </Button.Group>
          </div>
        </div>
        <div className="payment">
          <p>Upfront payment?</p>
          <Button.Group floated="left">
            <Button>Yes</Button>
            <Button active>No</Button>
          </Button.Group>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { currentStep: state.currentStep };
};

export default connect(mapStateToProps, {
  handleDuration,
  handlePayment,
  handleGigabyte
})(SubscriptionStep);
