import React from "react";

export default class Nav extends React.Component {

    constructor(props) {
      super(props);
      this.state = {

      };
    }
  
    render() {
      return (
            <nav className="row justify-content-between navbar navbar-dark bg-dark">
                <div className="col">
                    <a className="navbar-brand"  href="#">
                        <img src="https://picsum.photos/50/50" alt="logo"/>
                    </a>
                </div>
                <div className="col d-flex flex-row-reverse">
                    <a className="nav-link" href="#">Link</a>
                </div>
            </nav>
      );
    }
  }