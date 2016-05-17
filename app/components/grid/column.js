// @flow
import styles from './grid.css';
import React from 'react';

type ColumnType = | "1" | "2" | "3" | "4" | "5" | "6"
                  | "7" | "8" | "9" | "10" | "11" | "12";

type Props = {
  md: ColumnType,
  sm?: ColumnType,
  hiddenOnSmall: boolean,
  children?: any
}

export class Column extends React.Component {
  props: Props;

  static defaultProps = {
    hiddenOnSmall: false,
  };

  constructor(props: Props) {
    super(props);
  }

  render() {
    const md = styles["col_" + this.props.md];
    const sm = this.props.sm ? styles["col_" + this.props.sm + "_sm"] : null;
    const hidden = this.props.hiddenOnSmall ? styles["hidden_sm"] : null;
    return (
      <div className={[md, sm, hidden]}>
        {this.props.children}
      </div>
    )
  }
}
