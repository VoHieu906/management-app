/* eslint-disable */
import React from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID || "",
      userPoolClientId:
        process.env.NEXT_PUBLIC_COGNITO_USER_POOL_CLIENT_ID || "",
    },
  },
});
const formFields = {
  signUp: {
    email: {
      order: 1,
      placeholder: "Enter your email address",
      label: "Email",
      inputprops: { type: "email", required: true },
    },
  },
};
const AuthProvider = ({ children }: any) => {
  return (
    <div className="mt-5">
      <Authenticator formFields={formFields}>
        {({ user }: any) =>
          user ? (
            <div>{children}</div>
          ) : (
            <div>
              <h1> Please sign in below</h1>
            </div>
          )
        }
      </Authenticator>
    </div>
  );
};

export default AuthProvider;
