import React from "react";
import "./App.css";
import TorusSdk from "@toruslabs/customauth";
import ReactJsonView from "react-json-view";
import { Link } from "react-router-dom";

interface IState {
  loginDetails?: null;
}

interface IProps {}

class RedirectAuth extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      loginDetails: null,
    };
  }

  async componentDidMount() {
    // Get the token from the url
    const idToken = new URLSearchParams(window.location.search).get("token");
    console.log(idToken);

    // Get the sub from the token, to be used in the getTorusKey function
    const base64Url = (idToken as string).split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    const idTokenPayload = JSON.parse(window.atob(base64 || ""));
    const { sub } = idTokenPayload;

    // Create a new instance of TorusSdk
    const customAuth = new TorusSdk({
      baseUrl: window.location.origin, // base url of the application
      redirectPathName: "auth", // redirect path name
      enableLogging: true, // enable logging for debugging purposes
      enableOneKey: true, // enable one key
      uxMode: "redirect", // ux mode for the sdk
      network: "sapphire_devnet", // web3auth network
      web3AuthClientId: "WEB3AUTH_CLIENT_ID", // Get it from https://dashboard.web3auth.io
    } as any);

    const verifier = "w3a-azure-b2c"; // verifier name, Get it from https://dashboard.web3auth.io

    const loginDetails: any = await customAuth.getTorusKey(verifier, sub, { verifier_id: sub }, idToken as string);
    this.setState({
      loginDetails,
    });
  }

  render() {
    const { loginDetails } = this.state;
    return (
      <div className="App">
        <div className="about">
          <h1>This is the redirected page</h1>
          <Link to="/">Go back to home</Link>
          {loginDetails && <ReactJsonView src={loginDetails} style={{ textAlign: "left" }} />}
        </div>
      </div>
    );
  }
}

export default RedirectAuth;
