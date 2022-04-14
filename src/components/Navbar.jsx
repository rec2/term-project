import React from "react";

export default class Nav extends React.Component {

    constructor(props) {
      super(props);
      this.state = {

      };
    }
  
    render() {
      return (
            <nav class="row justify-content-between navbar navbar-dark bg-dark">
                <div class="col">
                    <a class="navbar-brand"  href="#">
                        <img src="https://picsum.photos/50/50" alt="logo"/>
                    </a>
                </div>
                <div class="col align-self-center">
                    logo
                </div>
            </nav>
      );
    }
  }