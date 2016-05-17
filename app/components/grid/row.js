// @flow
import styles from './grid.css';
import React from 'react';

type Props = {
  children?: any
}

export class Row extends React.Component {
  props: Props;

  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.row}>
        {this.props.children}
      </div>
    )
  }
}
