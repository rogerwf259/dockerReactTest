import { resolve } from "dns";
import React, { ReactElement, useEffect } from "react";
import { Bug } from "../App";

interface Props {
  bugs: Bug[];
}

export default function BugState({ bugs }: Props): ReactElement {
  const resolved: number = bugs.filter((bug) => (bug.resolved ? bug : null))
    .length;
  const pending: number = bugs.length - resolved;
  return (
    <div className="ui raised segment">
      <div className="ui segment">
        <h3>Bugs: {bugs.length}</h3>
        <h3>Resolved: {resolved}</h3>
        <h3>Pending: {pending}</h3>
      </div>
    </div>
  );
}
