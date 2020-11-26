import React, { ReactElement } from "react";
import { Bug as BugType } from "../App";
import Bug from "./Bug";

interface Props {
  bugs: BugType[];
  onResolved: Function;
}

export default function Bugs({ bugs, onResolved }: Props): ReactElement {
  return (
    <div className="ui raised segment">
      <div className="ui middle aligned divided list">
        {bugs.map((bug) => (
          <Bug bug={bug} onResolved={onResolved} />
        ))}
      </div>
    </div>
  );
}
