import React from 'react';
import PropTypes from 'prop-types';
import CustomBreakpointsContextContext from './CustomBreakpointsContext';

const { Provider } = CustomBreakpointsContextContext;

const CustomBreakpointsProvider = ({ customBreakpoints, children }) => <Provider value={{ customBreakpoints }}>{children}</Provider>;

CustomBreakpointsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  customBreakpoints: PropTypes.object.isRequired,
};

export default CustomBreakpointsProvider;
