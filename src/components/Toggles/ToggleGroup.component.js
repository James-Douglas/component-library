import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { tooltipPropTypes } from '../Tooltip/Tooltip.component';
import useDidUpdateEffect from '../../hooks/useDidUpdateEffect';
import Label from '../Label/Label.component';
import Row from '../Grid/Row/Row.component';
import getTheme from '../../utils/getTheme';
import FieldValidation from '../FieldValidation/FieldValidation.component';

const StyledRow = styled(Row)`
  margin-bottom: ${(props) => props.theme.spacing[16]};
  margin-left: 0;
  margin-right: 0;
`;

const StyledToggleGroup = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const StyledValidationWrapper = styled.div`
  width: 100%;
  margin-left: ${({ theme }) => theme.spacing[8]};
`;

export const getType = (children) => {
  for (let i = 0; i < children.length; i += 1) {
    const child = children[i];
    if (child.props && child.props.label) {
      const { length } = child.props.label;
      if (length > 25) {
        return 'rectangle';
      }
    }
  }
  return 'square';
};

export const getChildren = (children, type, name, selectedToggleValue, handleToggle, rectOptions, validationMessage) => (
  children.map((child, index) => {
    const key = `toggle-${child.props.id || index}`;
    const propsToAdd = {
      key,
      name,
      selectedValue: selectedToggleValue,
      onToggle: handleToggle,
      type,
      invalid: !!validationMessage && validationMessage.length > 0,
    };
    if (!child.props.id) propsToAdd.id = key;
    if (type === 'rectangle') propsToAdd.rectOptions = rectOptions;
    return React.cloneElement(child, propsToAdd);
  })
);

const ToggleGroup = ({
  label,
  tooltip,
  forceFullWidth,
  validationMessage,
  id,
  name,
  onToggle,
  selectedValue,
  children,
  rectOptions,
  className,
}) => {
  const [selectedToggleValue, setSelectedToggleValue] = useState(selectedValue);
  const type = getType(children);
  const handleToggle = (value) => {
    setSelectedToggleValue(value);
  };

  useDidUpdateEffect(onToggle, [selectedToggleValue], [onToggle, selectedToggleValue]);

  const tooltipOptions = tooltip;
  if (tooltip) {
    tooltipOptions.justifyEnd = true;
  }

  return (
    <ThemeProvider theme={getTheme()}>
      <>
        <Label forId={id} text={label} tooltip={tooltip} fullWidth={forceFullWidth} />
        <StyledRow>
          <StyledToggleGroup id={id} className={className}>
            {getChildren(children, type, name, selectedToggleValue, handleToggle, rectOptions, validationMessage)}
          </StyledToggleGroup>
          <StyledValidationWrapper>
            <FieldValidation message={validationMessage} />
          </StyledValidationWrapper>
        </StyledRow>
      </>
    </ThemeProvider>
  );
};

ToggleGroup.propTypes = {
  /**
   * Name property to be passed to the toggles - required for the underlying radio buttons
   */
  name: PropTypes.string.isRequired,
  /**
   * onChange handler function, called on select of a toggle with { id: <selected toggle id>, value: <selected toggle value> }
   */
  onToggle: PropTypes.func.isRequired,
  /**
   * Label for the ToggleGroup.
   */
  label: PropTypes.string,
  /**
   * Tooltip object (see Tooltip documentation)
   */
  tooltip: PropTypes.shape(tooltipPropTypes),
  /**
   * Forces the ToggleGroup to expand to 12 columns (default true for ToggleGroup)
   */
  forceFullWidth: PropTypes.bool,
  /**
   * Displays given validation message and invalid styles on the component when provided.
   */
  validationMessage: PropTypes.string,
  /**
   * Unique identifier for the toggle group
   */
  id: PropTypes.string,
  /**
   * Value of the currently selected toggle (use to pre-select)
   */
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Options object for rectangular toggles (see Toggle documentation)
   */
  rectOptions: PropTypes.shape({
    align: PropTypes.oneOf(['center', 'left', 'right']),
    col: PropTypes.oneOf([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    height: PropTypes.number,
  }),
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.oneOf([
      PropTypes.string,
      PropTypes.array,
      PropTypes.node,
    ])),
  ]),
  /**
   * Classes to be applied to the ToggleGroup component
   */
  className: PropTypes.string,
};

ToggleGroup.defaultProps = {
  label: '',
  tooltip: {},
  forceFullWidth: true,
  validationMessage: null,
  id: null,
  selectedValue: null,
  rectOptions: {
    align: 'center',
    col: 1,
    height: 8,
  },
  children: [],
  className: '',
};

export default ToggleGroup;
