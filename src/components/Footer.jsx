import React from "react";

export default class Nav extends React.Component {

    constructor(props) {
      super(props);
      this.state = {

      };
    }
  
    render() {
      return (
            <nav class="row d-flex navbar navbar-dark bg-dark mt-auto">
                <div class="col ">
                    <a class="nav-link text-center" href="#">About</a>
                </div>
                <div class="col">
                    <a class="nav-link text-center" href="#">Private Policy</a>
                </div>
                <div class="col">
                    <a class="nav-link text-center" href="#">Support</a>
                </div>
            </nav>
      );
    }
  }