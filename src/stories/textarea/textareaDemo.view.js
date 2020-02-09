/* eslint react/prop-types: 0 */
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import getTheme from 'utils/getTheme';
import Textarea from '../../components/Textarea/Textarea.component';

const StyledView = styled.div`
  padding: 2rem;
`;

const StyledBackground = styled.div`
  height: 100vh;
  background: ${(props) => (props.bordered ? '' : `${props.theme.colors.greyLighter}`)};
`;

const TextareaDemoView = ({
  id,
  name,
  label,
  placeholder,
  value,
  bordered,
  disabled,
  required,
  isPrefill,
  rows,
  wrap,
  readonly,
  maxChars,
  maxLength,
  validationMessage,
}) => (
  <ThemeProvider theme={getTheme()}>
    <StyledBackground
      bordered={bordered}
    >
      <StyledView>
        <Textarea
          tooltip={{ title: 'text area tooltip!' }}
          id={id}
          name={name}
          label={label}
          placeholder={placeholder}
          value={value}
          bordered={bordered}
          disabled={disabled}
          required={required}
          isPrefill={isPrefill}
          rows={rows}
          wrap={wrap}
          readonly={readonly}
          maxChars={maxChars}
          maxLength={maxLength}
          validationMessage={validationMessage}
        />
      </StyledView>
    </StyledBackground>

  </ThemeProvider>
);

export default TextareaDemoView;
