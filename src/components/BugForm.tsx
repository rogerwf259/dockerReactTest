import React, { ReactElement, useState } from "react";

interface Props {
  onAddBug: Function;
}

export default function BugForm({ onAddBug }: Props): ReactElement {
  const [text, setText] = useState<string>("");
  const onSubmit = (): void => {
    setText("");
    onAddBug(text);
  };
  return (
    <div className="ui action input centered">
      <input
        type="text"
        placeholder="Report bug"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="ui button" onClick={() => onSubmit()}>
        Add
      </button>
    </div>
  );
}
