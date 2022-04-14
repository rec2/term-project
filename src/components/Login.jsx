import React from "react";
import LoginForm from "./LoginForm";

export default class Login extends React.Component {

    constructor(props) {
      super(props);
      this.state = {

      };
    }
  
    render() {
      return (
            <div class="row justify-content-center align-items-center">
                <div class="col-6 landing text-center ">
                    <h1 class="mt-5">Welcome to the page</h1>
                    <p>Join others in helping this cause.</p>
                </div>
                <div class="col-4 text-center  ">
                    <LoginForm/>
                </div>
            </div>

      );
    }
  }