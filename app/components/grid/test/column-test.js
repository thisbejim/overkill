import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';
import { Column } from '../column.js';

describe("Column", function() {
  it('renders children when passed in', () => {
    const wrapper = shallow(
      <Column md={"12"}>
        <div className="unique" />
      </Column>
    );
    expect(wrapper.contains(<div className="unique" />)).to.equal(true);
  });
});
