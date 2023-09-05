/* eslint-disable class-methods-use-this */
import React from "react";
// import { Link } from "react-router-dom";
import TorusSdk, { TorusLoginResponse } from "@toruslabs/customauth";
import ReactJsonView from "react-json-view";

import { AZURE_URL } from "./constants";

interface IState {
  selectedVerifier: string;
  torusdirectsdk: TorusSdk | null;
  loginHint: string;
  loginResponse?: TorusLoginResponse | null;
}

interface IProps {}

class HomePage extends React.PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      selectedVerifier: "",
      torusdirectsdk: null,
      loginHint: "",
      loginResponse: null,
    };
  }

  login = () => {
    try {
      // open a url in a new tab to start the login process on Azure B2C
      window.open(AZURE_URL || "", "_blank");
    } catch (error) {
      console.error(error, "login caught");
    }
  };

  handleRedirectParameters = (hash: string, queryParameters: Record<string, any>) => {
    const hashParameters = hash.split("&").reduce((result: Record<string, any>, item) => {
      const [part0, part1] = item.split("=");
      result[part0] = part1;
      return result;
    }, {});
    let instanceParameters = {};
    let error = "";
    if (!queryParameters.preopenInstanceId) {
      if (Object.keys(hashParameters).length > 0 && hashParameters.state) {
        instanceParameters = JSON.parse(atob(decodeURIComponent(decodeURIComponent(hashParameters.state)))) || {};
        error = hashParameters.error_description || hashParameters.error || error;
      } else if (Object.keys(queryParameters).length > 0 && queryParameters.state) {
        instanceParameters = JSON.parse(atob(decodeURIComponent(decodeURIComponent(queryParameters.state)))) || {};
        if (queryParameters.error) error = queryParameters.error;
      }
    }
    return { error, instanceParameters, hashParameters };
  };

  render() {
    const { loginResponse } = this.state;
    return (
      <div className="app">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            margin: 100,
          }}
        >
          <div style={{ marginTop: "20px" }} onClick={this.login}>
            <button>Login with Azure B2C login</button>
          </div>
        </div>
        {loginResponse && (
          <div>
            <h2>Login Response</h2>
            <ReactJsonView src={loginResponse} style={{ marginTop: 20, textAlign: "left" }} />
          </div>
        )}
      </div>
    );
  }
}

export default HomePage;
