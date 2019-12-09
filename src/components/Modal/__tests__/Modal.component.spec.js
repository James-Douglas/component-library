import React from 'react';
import {
  render, fireEvent,
} from '@testing-library/react';
import 'jest-styled-components';
import Input from 'components/Input/Input.component';
import Modal from '../Modal.component';

/* Modal
–––––––––––––––––––––––––––––––––––––––––––––––––– */

describe('Modal', () => {
  it('renders with minimal props', () => {
    const { baseElement } = render(<Modal id="test-modal" visible />);
    const modal = baseElement.querySelector('#test-modal');
    expect(modal).toBeInTheDocument();
    expect(modal).toMatchSnapshot();
  });

  it('does not render if visible={false}', () => {
    const { baseElement } = render(<Modal id="test-modal" visible={false} />);
    const modal = baseElement.querySelector('#test-modal');

    expect(modal).not.toBeInTheDocument();
  });


  it('renders children and renders other components', () => {
    const { baseElement } = render(
      <Modal id="test-modal" visible>
        <div id="test-content">
          <p>some test text</p>
        </div>
        <Input id="test-child-input" handleChange={() => {}} />
      </Modal>,
    );

    const modal = baseElement.querySelector('#test-modal');
    const testDiv = modal.querySelector('#test-content');
    const input = modal.querySelector('#test-child-input');

    expect(input).toBeInTheDocument();
    expect(testDiv).toBeInTheDocument();
    expect(modal).toBeInTheDocument();
  });

  it('accepts and fires a close function as a prop', () => {
    const closeCb = jest.fn();
    const { baseElement } = render(<Modal id="test-modal" visible handleClose={closeCb} />);
    const modal = baseElement.querySelector('#test-modal');
    const closeBtn = modal.querySelector('.icon-close');

    fireEvent.click(closeBtn, { button: 0 });
    expect(closeCb).toHaveBeenCalled();
  });

  it('modifies the size of the modal to large ', () => {
    const { baseElement } = render(<Modal id="test-modal" visible size="lg" />);
    const sizeClass = baseElement.querySelector('.lg');
    const modal = baseElement.querySelector('#test-modal');

    expect(modal).toHaveStyleRule('width', '66.666667%');
    expect(sizeClass).toBeInTheDocument();
  });

  it('modifies the size of the modal to medium ', () => {
    const { baseElement } = render(<Modal id="test-modal" visible size="md" />);
    const sizeClass = baseElement.querySelector('.md');
    const modal = baseElement.querySelector('#test-modal');

    expect(modal).toHaveStyleRule('width', '50%');
    expect(sizeClass).toBeInTheDocument();
  });

  it('modifies the size of the modal to small ', () => {
    const { baseElement } = render(<Modal id="test-modal" visible size="sm" />);
    const sizeClass = baseElement.querySelector('.sm');
    const modal = baseElement.querySelector('#test-modal');

    expect(modal).toHaveStyleRule('width', '33.333333%');
    expect(sizeClass).toBeInTheDocument();
  });

  it('can be extended with additional classes', () => {
    const { baseElement } = render(<Modal id="test-modal" visible className="test test-1" />);
    const class1 = baseElement.querySelector('.test');
    const class2 = baseElement.querySelector('.test-1');

    expect(class1).toBeInTheDocument();
    expect(class2).toBeInTheDocument();
  });
});
