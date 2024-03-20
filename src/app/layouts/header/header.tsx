import React from "react";
import AfterLogin from "./after-login/after-login";
import BeforeLogin from "./before-login/before-login";

export default function Header(): JSX.Element {
  const userLogin = true;

  return <div>{userLogin ? <AfterLogin /> : <BeforeLogin />}</div>;
}
