import React from "react";
import "../App.css";
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
    const idToken = new URLSearchParams(window.location.search).get("token");
    console.log(idToken);
    const base64Url = (idToken as string).split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    const idTokenPayload = JSON.parse(window.atob(base64 || ""));
    const { sub } = idTokenPayload;

    const torusdirectsdk = new TorusSdk({
      baseUrl: window.location.origin,
      redirectPathName: "auth",
      enableLogging: true,
      uxMode: "redirect",
      network: "sapphire_devnet",
      web3AuthClientId: "torus-default",
    } as any);

    const loginDetails: any = await torusdirectsdk.getTorusKey("w3a-azure-b2c", sub, { verifier_id: sub }, idToken as string);
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
