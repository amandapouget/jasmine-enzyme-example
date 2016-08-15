import React from 'react';
import { shallow, mount, render } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme'
import Foo from '../src/Foo';

describe("A suite", function() {
  beforeEach(() => {
    jasmineEnzyme()
  });

  it("contains spec with an expectation", function() {
    expect(shallow(<Foo />).contains(<div className="foo" />)).toEqual(true);
  });

  it("contains spec with an expectation", function() {
    expect(shallow(<Foo />).is('.foo')).toEqual(true);
  });

  it("contains spec with an expectation", function() {
    expect(mount(<Foo />).find('.foo').length).toEqual(1);
  });
});
