import React from 'react';
import { shallow, mount } from 'enzyme';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme());
import sinon from 'sinon';
import Sample from '../app/Sample';

describe('<Sample />', () => {
  it('clicking overlay should change state', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(<Sample clickHandler={onButtonClick} />);
    wrapper.find('.magical').simulate('click');
    wrapper.find('.magical').simulate('click');
    expect(onButtonClick.calledTwice).to.equal(true);
  });

});
