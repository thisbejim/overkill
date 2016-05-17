// @flow
import styles from './grid.css';
import React from 'react';

type Props = {
  children?: any
}

export class Container extends React.Component {
  props: Props;

  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.container}>
        {this.props.children}
      </div>
    )
  }
}
