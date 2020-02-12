import React from "react";
import img from "../images/image.png";
import { connect } from "react-redux";

class SuccessMessage extends React.Component {
  render() {
    console.log("Order Data", this.props.orderData);

    return (
      <div className="step">
        <div className="success">
          <img src={img} alt="success"></img>
          <h5>Thank you for your order!!</h5>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { orderData: state };
};

export default connect(mapStateToProps)(SuccessMessage);
