import React from "react";

export default class Nav extends React.Component {

    constructor(props) {
      super(props);
      this.state = {

      };
    }
  
    render() {
      return (
            <nav className="justify-content-between fixed-top navbar navbar-dark bg-dark">
                <div className="col">
                    <a className="navbar-brand"  href="#">
                        
                    </a>
                </div>
                <div className="col d-flex flex-row-reverse">
                    <a className="nav-link" href="#">Link</a>
                </div>
            </nav>
      );
    }
  }