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
          appId={"723459078070837"}
          onReject={this.error}
          onResolve={this.success}
        >
          Facebook
        </FacebookSignIn>
        <GoogleSignIn
          client_id={
            "218652127520-9vqjdj5ge0npi5nd5cpihqi96ti4k5rc.apps.googleusercontent.com"
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
