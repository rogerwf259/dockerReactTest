import React, { useState } from "react";
import BugForm from "./components/BugForm";
import Bugs from "./components/Bugs";
import BugState from "./components/BugState";


export interface Bug {
  id: number;
  description: string;
  resolved: boolean;
}

function App() {
  const [bugs, setBugs] = useState<Bug[]>(Array<Bug>());
  const onAddBug = (description: string): void => {
    setBugs([...bugs, { id: bugs.length + 1, description, resolved: false }]);
  };
  const onResolved = (id: number, val: boolean): void => {
    setBugs(
      bugs.map((bug) => {
        if (bug.id === id) bug.resolved = !val;
        return bug;
      })
    );
  };
  return (
    <div className="ui container">
      <h3>Dockerized React App</h3>
      <BugState bugs={bugs} />
      <BugForm onAddBug={onAddBug} />
      <Bugs bugs={bugs} onResolved={onResolved} />
    </div>
  );
}

export default App;
