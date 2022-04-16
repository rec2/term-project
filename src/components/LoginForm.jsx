import React from "react";

export default class LoginForm extends React.Component {

    constructor(props) {
      super(props);
      this.state = {

      };
    }
  
    render() {
      return (
            <div className="row justify-content-center">
                <form className="col-8 ">
                    <div className="mb-3 ">
                        <label for="usernameInput" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="userNameInput" placeholder="name@example.com"/>
                    </div>
                    <div className="mb-3">
                    <label for="passwordInput" className="form-label">Password</label>
                        <input type="text" className="form-control" id="passwordInput" />
                    </div>
                <div className="row">
                    <div className="col text-center">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <div className="col text-center">
                        <button className="btn btn-secondary">Sign Up</button>
                    </div>
                </div>
                </form>
            </div>
      );
    }
  }