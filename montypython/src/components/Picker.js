import React, { Component } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

class Picker extends Component {
  state = {
    date: new Date(),
    showDate: false,
  };

  onChange = (date) => {
    this.setState({
      date,
    });
  };

  validation = () => {
    this.setState({
      showDate: true,
    });
  };

  reset = () => {
    this.setState({
      showDate: false,
    });
  };

  render() {
    return (
      <div
        style={{
          position: "relative",
          dispalyFlex: "flex",
          placeItems: "center",
          marginLeft: "35%",
        }}
      >
        <div onClick={this.reset}>
          <Calendar
            onChange={this.onChange}
            selectRange={true}
            value={this.state.date}
          />
        </div>

        {/* <p>Date choisie: {this.state.date.toLocaleDateString()}</p> */}
        <button
          className="buttonResultDate"
          onClick={this.validation}
          style={{
            dispalyFlex: "flex",
            justifyContent: "center",
            margin: " 0  18% auto",
            backgroundColor: "red",
            padding: "10px",
            borderRadius: "10px",
            cursor: "pointer",
            color: "#eee",
          }}
        >
          Valider
        </button>
        {this.state.showDate ? (
          <div className="resultDate">
            <p
              className="pickerDate"
              style={{ backgroundColor: "#eee", width: "350px" }}
            >
              <span>Réservation</span> <hr /> Du :{" "}
              {this.state.date[0].toLocaleDateString()}
            </p>
            <p
              className="pickerDate2"
              style={{ backgroundColor: "#eee", width: "350px" }}
            >
              Au : {this.state.date[1].toLocaleDateString()}
            </p>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Picker;
