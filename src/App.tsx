import React, { ReactElement } from "react";
import Header from "./components/reduxComponents/Header";

interface Props {}

export default function App({}: Props): ReactElement {
  return (
    <div className="ui container">
      <Header />
    </div>
  );
}
