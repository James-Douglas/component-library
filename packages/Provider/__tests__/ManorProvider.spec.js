import React from 'react';
import styled from 'styled-components';
import 'jest-styled-components';
import { render } from '../../../testUtils';
import ManorProvider from '../ManorProvider';

const testTheme = {
  background: 'red',
};

// eslint-disable-next-line react/prop-types
const TestComponent = ({ children }) => {
  const StyledDiv = styled.div`
    background: ${({ theme }) => theme.background};
  `;
  return <StyledDiv>{children}</StyledDiv>;
};

describe('ManorProvider', () => {
  it('injects theme', () => {
    const { container } = render(
      <ManorProvider theme={testTheme} disableGlobalStyles>
        <TestComponent>test</TestComponent>
      </ManorProvider>,
    );
    expect(container.firstChild).toHaveStyleRule('background', 'red');
  });
});
