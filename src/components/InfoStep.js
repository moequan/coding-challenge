import React from "react";
import { Button, Form } from "semantic-ui-react";
import { connect } from "react-redux";
import { handleInfo, handlePrevious, handleNext } from "../actions/";

class InfoStep extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: this.props.info.firstName,
      lastName: this.props.info.lastName,
      email: this.props.info.email,
      address: this.props.info.address,
      terms: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlePrevious() {
    this.props.handlePrevious();
  }

  handleSubmit() {
    if (this.state.terms) {
      this.props.handleInfo(this.state);
      this.props.handleNext();
    } else {
      const form = document.querySelector("#infoForm");
      form.reportValidity();
    }
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
    return (
      <div className="step">
        <Form id="infoForm" onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>First Name</label>
            <input
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleInputChange}
              required
            />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleInputChange}
              required
            />
          </Form.Field>
          <Form.Field>
            <label>E-Mail</label>
            <input
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              required
            />
          </Form.Field>
          <Form.Field>
            <label>Address</label>
            <input
              name="address"
              value={this.state.address}
              onChange={this.handleInputChange}
              required
            />
          </Form.Field>
          <Form.Field>
            <label>
              <input
                name="terms"
                required
                type="checkbox"
                checked={this.state.terms}
                onChange={this.handleInputChange}
                id="terms"
              />
              I agree to the Terms and Conditions
            </label>
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
    info: state.info
  };
};

export default connect(mapStateToProps, {
  handleInfo,
  handlePrevious,
  handleNext
})(InfoStep);
