import React from 'react';
import {
  render, fireEvent,
} from '@testing-library/react';

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

  it('modifies the size via size prop', () => {
    const { baseElement } = render(<Modal id="test-modal" visible size="md" />);
    const sizeClass = baseElement.querySelector('.md');

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
