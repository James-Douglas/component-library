import React from 'react';
import { render } from '@testing-library/react';
import Combo from '../Combo.component';

const apiData = ['delectus aut autem', 'quis ut nam facilis et officia qui', 'fugiat veniam minus', 'et porro tempora'];

describe('Combo', () => {
  /* it('renders with role attribute for list', () => {
    const { container } = render(<Combo id="test-id" />);
    const list = container.getElementsByTagName('li')[0];
    const roleAttribute = list.getAttribute('role');
    expect(roleAttribute).not.toBe('option');
  }); */
  it('renders list correctly ', () => {
    const { container } = render(<Combo apiData={apiData} id="combo-id-first" />);
    const list = container.getElementsByTagName('li');
    expect(list.length).toBe(0);
  });
  it('correct list filtering ', () => {
    const { container } = render(<Combo apiData={apiData} id="combo-id-first" prefillValue="fac" />);
    const list = container.getElementsByTagName('li');
    expect(list.length).toBe(1);
  });
});
