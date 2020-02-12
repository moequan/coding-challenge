import React from "react";
import { Button, Form } from "semantic-ui-react";
import { connect } from "react-redux";
import { handleInfo, handlePrevious, handleNext } from "../actions/";

class CardStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: "",
      expiration: "",
      security: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlePrevious() {
    this.props.handlePrevious();
  }

  handleSubmit() {
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
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Card Number</label>
          <input
            placeholder="Card number"
            name="number"
            value={this.state.number}
            onChange={this.handleInputChange}
            required
          />
        </Form.Field>
        <Form.Field>
          <label>Card expiration date</label>
          <input
            placeholder="Card expiration date"
            name="expiration"
            value={this.state.expiration}
            onChange={this.handleInputChange}
            required
          />
        </Form.Field>
        <Form.Field>
          <label>Card security code</label>
          <input
            placeholder="Card security code"
            name="security"
            value={this.state.security}
            onChange={this.handleInputChange}
            required
          />
        </Form.Field>

        <Button type="button" onClick={this.handlePrevious}>
          Previous
        </Button>
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}
const mapStateToProps = state => {
  return { currentStep: state.currentStep, subscription: state.subscription };
};

export default connect(mapStateToProps, {
  handleInfo,
  handlePrevious,
  handleNext
})(CardStep);
