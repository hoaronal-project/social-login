import React, { Component } from "react";

import { FacebookSignIn, GoogleSignIn } from "google-facebook-signin-react";

export default class App extends Component {
  success(res) {
    return new Promise((resolve, reject) => {
      console.log(res);
      resolve();
    });
  }

  error(err) {
    console.log(err);
  }

  render() {
    return (
      <div>
        <FacebookSignIn
          appId={"564841624086506"}
          onReject={this.error}
          onResolve={this.success}
        >
          Facebook
        </FacebookSignIn>
        <GoogleSignIn
          client_id={
            "142305466831-7jpko2cor6icnbrofditv4kse3s6s136.apps.googleusercontent.com"
          }
          onReject={this.error}
          onResolve={this.success}
        >
          Google
        </GoogleSignIn>
      </div>
    );
  }
}
