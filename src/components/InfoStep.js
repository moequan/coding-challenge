import React from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { connect } from "react-redux";
import { handleInfo, handlePrevious, handleNext } from "../actions/";

class InfoStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      terms: false
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

  handleInputChange(event, data) {
    let name;
    let value;
    const target = event.target;

    if (data) {
      name = data.name;
      value = data.checked;
    } else {
      name = target.name;
      value = target.value;
    }

    this.setState({
      [name]: value
    });
  }

  render() {
    this.props.handleInfo(this.state);
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>First Name</label>
          <input
            placeholder="First Name"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleInputChange}
            required
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            placeholder="Last Name"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <label>E-Mail</label>
          <input
            placeholder="Last Name"
            name="email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Adress</label>
          <input
            placeholder="Last Name"
            name="address"
            value={this.state.address}
            onChange={this.handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            label="I agree to the Terms and Conditions"
            name="terms"
            type="checkbox"
            checked={this.state.terms}
            onChange={this.handleInputChange}
            control="input"
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
})(InfoStep);
