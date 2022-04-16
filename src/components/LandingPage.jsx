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
        <div className="row middle justify-content-center align-items-center">
          <img className="w-100 h-100 p-0" src="landingImage.jpg" alt="image"/>
          <div className="row landing justify-content-center align-items-center">
            <div className="col-5 text-center" >
              <div className="p-5">
              <h1>Welcome to the page</h1>
              <p>Help our others who have signed up!</p>
              <h3>Testig</h3>
                <p>Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. Ut enim ad minim
                qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
            <div className="col-5"><LoginForm/></div>
          </div>
        </div>
      );
    }
  }