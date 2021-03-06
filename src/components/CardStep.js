import React from "react";
import { Button, Form } from "semantic-ui-react";
import { connect } from "react-redux";
import {
  handleInfo,
  handlePrevious,
  handleNext,
  handleCard
} from "../actions/";

class CardStep extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      number: this.props.card.number,
      expiration: this.props.card.expiration,
      security: this.props.card.security
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  handlePrevious() {

    this.props.handlePrevious();
  }

  handleSubmit() {

    this.props.handleCard(this.state);
    this.props.handleNext();
  }

  handleInputChange(event) {

    const target = event.target;

    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
  }

  render() {

    this.props.handleInfo(this.state);
    return (
      <div className="step">
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Card Number</label>
            <input
              type="number"
              name="number"
              value={this.state.number}
              onChange={this.handleInputChange}
              required
            />
          </Form.Field>
          <Form.Field>
            <label>Card expiration date</label>
            <input
              type="date"
              name="expiration"
              value={this.state.expiration}
              onChange={this.handleInputChange}
              required
            />
          </Form.Field>
          <Form.Field>
            <label>Card security code</label>
            <input
              type="number"
              name="security"
              value={this.state.security}
              onChange={this.handleInputChange}
              required
            />
          </Form.Field>
          <div className="actions">
            <Button type="button" onClick={this.handlePrevious}>
              Previous
            </Button>
            <Button type="submit">Next</Button>
          </div>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentStep: state.currentStep,
    subscription: state.subscription,
    card: state.card
  };
};

export default connect(mapStateToProps, {
  handleInfo,
  handlePrevious,
  handleNext,
  handleCard
})(CardStep);
