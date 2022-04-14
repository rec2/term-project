import React from "react";

export default class LoginForm extends React.Component {

    constructor(props) {
      super(props);
      this.state = {

      };
    }
  
    render() {
      return (
            <div class="row justify-content-center">
                <form class="col-8 ">
                    <div class="mb-3 ">
                        <label for="usernameInput" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="userNameInput" placeholder="name@example.com"/>
                    </div>
                    <div class="mb-3">
                    <label for="passwordInput" class="form-label">Password</label>
                        <input type="text" class="form-control" id="passwordInput" />
                    </div>
                <div class="row">
                    <div class="col text-center">
                        <button class="btn btn-primary">Login</button>
                    </div>
                    <div class="col text-center">
                        <button class="btn btn-secondary">Sign Up</button>
                    </div>
                </div>
                </form>
            </div>
      );
    }
  }