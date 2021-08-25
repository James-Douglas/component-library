import React from 'react';
import 'jest-styled-components';
import { render } from '../../../testUtils';
import WizardModal from '../WizardModal.component';

/* Modal
–––––––––––––––––––––––––––––––––––––––––––––––––– */

describe('WizardModal', () => {
  it('renders with minimal props', () => {
    const { baseElement } = render(<WizardModal id="test-wizard-modal" visible trackingLabel="test-wizard-modal-trackingLabel" />);
    const wizardModal = baseElement.querySelector('#test-wizard-modal');
    expect(wizardModal).toBeInTheDocument();
    expect(wizardModal).toMatchSnapshot();
  });

  it('does not render if visible={false}', () => {
    const { container } = render(<WizardModal id="test-wizard-modal" visible={false} trackingLabel="test-wizard-modal-trackingLabel" />);
    const modal = container.querySelector('#test-wizard-modal');
    expect(modal).not.toBeInTheDocument();
  });

  it('renders children and renders other components', () => {
    const { baseElement } = render(
      <WizardModal id="test-modal" visible trackingLabel="test-wizard-modal-trackingLabel">
        <div id="test-content">
          <p>some test text</p>
        </div>
        <div id="test-content2">
          <p>some other test text</p>
        </div>
      </WizardModal>,
    );

    const modal = baseElement.querySelector('#test-modal');
    const testDiv = modal.querySelector('#test-content');
    const testDiv2 = modal.querySelector('#test-content2');

    expect(testDiv2).toBeInTheDocument();
    expect(testDiv).toBeInTheDocument();
    expect(modal).toBeInTheDocument();
  });
});
