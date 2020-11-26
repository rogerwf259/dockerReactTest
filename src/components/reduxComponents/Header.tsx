import React, { ReactElement } from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../redux/index";

interface MStateProps {
  total: number;
  pending: number;
  resolved: number;
}

const mapState = (state: RootState): MStateProps => {
  const resolved: number = state.filter((bug) => bug.status).length;
  const pending: number = state.length - resolved;
  return {
    total: state.length,
    pending,
    resolved,
  };
};

const connector = connect(mapState, null);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {};

function Header({ total, pending, resolved }: Props): ReactElement {
  return (
    <div className="ui horizontal segments">
      <div className="ui segment">
        <h3>Bugs: {total}</h3>
      </div>
      <div className="ui segment">
        <h3>Pending: {pending}</h3>
      </div>
      <div className="ui segment">
        <h3>Resolved: {resolved}</h3>
      </div>
    </div>
  );
}

export default connector(Header);
