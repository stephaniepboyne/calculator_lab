import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })

  it('should add two numbers together', () => {
    const button1 = container.find('#number1');
    const button4 = container.find('#number4');
    const operator_add = container.find('#operator_add')
    const operator_equals = container.find('#operator-equals')
    const runningTotal = container.find('#running-total');
    button1.simulate('click');
    operator_add.simulate('click');
    button4.simulate('click');
    operator_equals.simulate('click');
    expect(runningTotal.text()).toEqual('5');
  })
  
  it ('should be able to subtract one number from another', () => {
    const button4 = container.find('#number4');
    const button7 = container.find('#number7');
    const operator_subtract = container.find('#operator-subtract');
    const operator_equals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button7.simulate('click');
    operator_subtract.simulate('click')
    button4.simulate('click');
    operator_equals.simulate('click');
    expect(runningTotal.text()).toEqual('3')
  })

  it('should be able to multiply one number by another', () => {
    const button3 = container.find('#number3');
    const button5 = container.find('#number5');
    const operator_multiply = container.find('#operator-multiply');
    const operator_equals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button3.simulate('click');
    operator_multiply.simulate('click');
    button5.simulate('click');
    operator_equals.simulate('click');
    expect(runningTotal.text()).toEqual('15')
  })

  it('should be able to divide one number by another', () => {
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const button7 = container.find('#number7');
    const operator_divide = container.find('#operator-divide');
    const operator_equals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button2.simulate('click');
    button1.simulate('click');
    operator_divide.simulate('click');
    button7.simulate('click');
    operator_equals.simulate('click');
    expect(runningTotal.text()).toEqual('3')
  })

  it('should be able to concatenate two numbers', () => {
    const button2 = container.find('#number2');
    const button3 = container.find('#number3');
    const button8 = container.find('#number8');
    const operator_equals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button2.simulate('click');
    button3.simulate('click');
    button8.simulate('click');
    operator_equals.simulate('click');
    expect(runningTotal.text()).toEqual('238')
  })

  it('chain multiple operations together', () => {
    const button2 = container.find('#number2');
    const button3 = container.find('#number3');
    const button8 = container.find('#number8');
    const operator_add = container.find('#operator_add');
    const operator_divide = container.find('#operator-divide');
    const operator_equals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button8.simulate('click');
    operator_add.simulate('click')
    button3.simulate('click');
    // operator_equals.simulate('click');
    operator_divide.simulate('click');
    button2.simulate('click');
    operator_equals.simulate('click');
    expect(runningTotal.text()).toEqual('5.5')
  })
  
  it('should clear the running total without affecting the calculation', () => {
    const button2 = container.find('#number2');
    const button3 = container.find('#number3');
    const operator_add = container.find('#operator_add');
    const operator_equals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    const clear = container.find('#clear');
    button2.simulate('click');
    operator_add.simulate('click')
    button2.simulate('click');
    clear.simulate('click')
    operator_add.simulate('click')
    button3.simulate('click');
    operator_equals.simulate('click');
    expect(runningTotal.text()).toEqual('5')
  })

})





