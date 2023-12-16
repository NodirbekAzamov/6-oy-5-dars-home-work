import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
export class App extends Component {
  state = {
    hour: 0,
    minute: 0,
    secoud: 0,
    disabled: false,
    intervals: "",
    saveIntervals: [],
  };

  incriment1 = () => {
    this.setState({
      hour: this.state.hour + 1,
    });
  };

  decriment1 = () => {
    this.setState({
      hour: this.state.hour - 1,
    });
  };

  incriment2 = () => {
    this.setState({
      minute: this.state.minute + 1,
    });
  };

  decriment2 = () => {
    this.setState({
      minute: this.state.minute - 1,
    });
  };

  incriment3 = () => {
    this.setState({
      secoud: this.state.secoud + 1,
    });
  };

  decriment3 = () => {
    this.setState({
      secoud: this.state.secoud - 1,
    });
  };

  start = () => {
    let interval = setInterval(() => {
      const { secoud, hour, minute } = this.state;
      if (hour === 0 && minute === 0 && secoud === 0) {
        clearInterval(this.state.intervals);
        this.setState({
          secoud: 0,
          minute: 0,
          hour: 0,
          disabled: false,
        });
      } else if (secoud === 0) {
        this.setState({
          secoud: 59,
        });
        if (minute === 0) {
          this.setState({
            minute: 59,
          });
          if (hour === 0) {
            this.setState({
              hour: 23,
              disabled: false,
            });
          } else {
            this.setState({
              hour: hour - 1,
            });
          }
        } else {
          this.setState({
            minute: minute - 1,
          });
        }
      } else {
        this.setState({
          secoud: secoud - 1,
        });
      }
    }, 1000);
    this.setState({
      intervals: interval,
      disabled: true,
    });
  };

  stop = () => {
    const { intervals } = this.state;
    clearInterval(intervals);
    this.setState({
      disabled: false,
    });
  };

  interval = () => {
    const { saveIntervals, hour, minute, secoud } = this.state;
    let result = saveIntervals;
    result.push(hour + ":" + minute + ":" + secoud);
    this.setState({
      saveIntervals: result,
    });
  };

  clear = () => {
    clearInterval(this.state.intervals);
    this.setState({
      secoud: 0,
      minute: 0,
      hour: 0,
      disabled: false,
      saveIntervals: [],
    });
  };

  render() {
    const { hour, minute, secoud, disabled, saveIntervals } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-3">
            <div className="card">
              <div className="card-header">
                <h1 className="text-center">Timer</h1>
              </div>
              <div className="card-body">
                <div className="box d-flex justify-content-center">
                  <button className="btn btn-success" onClick={this.incriment1}>
                    +
                  </button>
                  <h2>{hour}</h2>
                  <button className="btn btn-danger" onClick={this.decriment1}>
                    -
                  </button>
                  <h1>:</h1>
                  <button className="btn btn-success" onClick={this.incriment2}>
                    +
                  </button>
                  <h2>{minute}</h2>
                  <button className="btn btn-danger" onClick={this.decriment2}>
                    -
                  </button>
                  <h1>:</h1>
                  <button className="btn btn-success" onClick={this.incriment3}>
                    +
                  </button>
                  <h2>{secoud}</h2>
                  <button className="btn btn-danger" onClick={this.decriment3}>
                    -
                  </button>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-around">
                <button
                  className="btn btn-info"
                  onClick={this.start}
                  disabled={disabled}
                >
                  Start
                </button>
                <button className="btn btn-warning" onClick={this.stop}>
                  Stop
                </button>
                <button className="btn btn-primary" onClick={this.interval}>
                  interval
                </button>
                <button className="btn btn-danger" onClick={this.clear}>
                  Clear
                </button>
              </div>
              {saveIntervals.map((item) => (
                <p>{item}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
