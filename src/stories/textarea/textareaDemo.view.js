import React from 'react';
import PropTypes from 'prop-types';
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
  disableFieldset,
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
          disableFieldset={disableFieldset}
        />
      </StyledView>
    </StyledBackground>

  </ThemeProvider>
);

TextareaDemoView.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  bordered: PropTypes.bool,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  isPrefill: PropTypes.bool,
  rows: PropTypes.string,
  wrap: PropTypes.string,
  readonly: PropTypes.bool,
  maxChars: PropTypes.string,
  maxLength: PropTypes.string,
  disableFieldset: PropTypes.bool,
};

TextareaDemoView.defaultProps = {
  name: '',
  value: '',
  label: '',
  placeholder: '',
  bordered: false,
  disabled: false,
  required: false,
  isPrefill: false,
  rows: '',
  wrap: '',
  readonly: false,
  maxLength: '',
  maxChars: '',
  disableFieldset: false,
};

export default TextareaDemoView;
