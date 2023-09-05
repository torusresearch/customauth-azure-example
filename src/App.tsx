/* eslint-disable class-methods-use-this */
import React from "react";

import { AZURE_URL } from "./constants";

interface IProps {}

class HomePage extends React.PureComponent<IProps> {
  login = () => {
    try {
      // open a url in a new tab to start the login process on Azure B2C
      window.open(AZURE_URL || "", "_blank");
      // Check src/constants/index.tsx for the AZURE_URL
    } catch (error) {
      console.error(error, "unable to open azure login url in new tab");
    }
  };

  render() {
    return (
      <div className="App">
        <div>
          <div className="about">
            <h1>Azure AD B2C x CustomAuth Example</h1>
          </div>
          <div style={{ marginTop: "20px" }} onClick={this.login}>
            <button>Login with Azure B2C login</button>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
