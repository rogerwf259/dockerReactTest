import React, { ReactElement } from "react";
import { Bug as BugType } from "../App";

interface Props {
  bug: BugType;
  onResolved: Function;
}

export default function Bug({ bug, onResolved }: Props): ReactElement {
  return (
    <div className="item">
      <div className="right floated content">
        <div className="ui fitted checkbox" style={{ marginRight: "1rem" }}>
          <input
            type="checkbox"
            checked={bug.resolved}
            onChange={() => onResolved(bug.id, bug.resolved)}
          />
          <label></label>
        </div>
        <div className="ui button">Remove</div>
      </div>
      <div className="content">
        <h3>{bug.description}</h3>
      </div>
    </div>
  );
}
