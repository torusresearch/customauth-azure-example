import React from "react";
import "../App.css";
import TorusSdk, { UX_MODE } from "@toruslabs/customauth";
import { AZURE_URL } from "../constants";

interface IState {
  torusdirectsdk: TorusSdk | null;
  consoleText?: string;
}

interface IProps {}

class RedirectMode extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      torusdirectsdk: null,
    };
  }

  componentDidMount = async () => {
    try {
      const torusdirectsdk = new TorusSdk({
        baseUrl: window.location.origin,
        // user will be redirect to auth page after login
        redirectPathName: "auth",
        enableLogging: true,
        uxMode: UX_MODE.REDIRECT,
        network: "testnet",
        web3AuthClientId: "torus-default",
      } as any);
      await torusdirectsdk.init({ skipSw: true });

      this.setState({ torusdirectsdk });
    } catch (error) {
      console.error(error, "mounted caught");
    }
  };

  login = () => {
    try {
      // open a url in a new tab to start the login process on Azure B2C
      window.open(AZURE_URL || "", "_blank");
    } catch (error) {
      console.error(error, "login caught");
    }
  };

  render() {
    return (
      <div className="App">
        <div style={{ marginTop: "20px" }} onClick={this.login}>
          <button>Login with Azure B2C login</button>
        </div>
      </div>
    );
  }
}

export default RedirectMode;
