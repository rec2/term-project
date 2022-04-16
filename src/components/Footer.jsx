import React from "react";

export default class Nav extends React.Component {

    constructor(props) {
      super(props);
      this.state = {

      };
    }
  
    render() {
      return (
            <nav className="d-flex fixed-bottom navbar navbar-dark bg-dark">
                <div className="col ">
                    <a className="nav-link text-center" href="#">About</a>
                </div>
                <div className="col">
                    <a className="nav-link text-center" href="#">Private Policy</a>
                </div>
                <div className="col">
                    <a className="nav-link text-center" href="#">Support</a>
                </div>
            </nav>
      );
    }
  }