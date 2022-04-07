import React from 'react';
import 'jest-styled-components';
import { Input } from '@comparethemarketau/manor-input';
import {
  render, fireEvent,
} from '../../../testUtils';
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

  it('renders with scroll lock', () => {
    const { baseElement, rerender } = render(
      <Modal id="test-modal" visible disableBodyScrollLock={false} trackingLabel="test">
        <div style={{ height: '100vh' }} />
      </Modal>,
    );

    expect(baseElement).toHaveStyle('overflow: hidden');

    rerender(
      <Modal id="test-modal" visible disableBodyScrollLock trackingLabel="test">
        <div style={{ height: '100vh' }} />
      </Modal>,
    );
    expect(baseElement).not.toHaveStyle('overflow: hidden');

    rerender(
      <Modal id="test-modal" visible={false} disableBodyScrollLock={false} trackingLabel="test">
        <div style={{ height: '100vh' }} />
      </Modal>,
    );
    expect(baseElement).not.toHaveStyle('overflow: hidden');
  });

  it('does not render if visible={false}', () => {
    const { container } = render(<Modal id="test-modal" visible={false} />);
    const modal = container.querySelector('#test-modal');
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

  it('can be extended with additional classes', () => {
    const { baseElement } = render(<Modal id="test-modal" visible className="test test-1" />);
    const class1 = baseElement.querySelector('.test');
    const class2 = baseElement.querySelector('.test-1');

    expect(class1).toBeInTheDocument();
    expect(class2).toBeInTheDocument();
  });

  it('renders primary button but not secondary', () => {
    const primaryClick = jest.fn();
    const { baseElement } = render(<Modal id="test-modal" visible primaryActionTitle="Primary Button" handlePrimaryActionClick={primaryClick} />);
    const modal = baseElement.querySelector('#test-modal');
    const primaryButton = modal.querySelector('#primary-btn');

    expect(primaryButton).toBeInTheDocument();

    fireEvent.click(primaryButton, { button: 0 });
    expect(primaryClick).toHaveBeenCalled();
  });

  it('renders with supplementary bar', () => {
    const { baseElement } = render(<Modal id="test-modal" visible showSupplementaryBar supplementaryBarOptions={{ showRequestCall: true }} />);
    const modal = baseElement.querySelector('#test-modal');
    const supplementaryBar = modal.querySelector('#supplementary-bar');

    expect(supplementaryBar).toBeInTheDocument();
  });
});
