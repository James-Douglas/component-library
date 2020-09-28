/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/pro-regular-svg-icons';
import { withTheme } from 'styled-components';

const useStyles = makeStyles({
  container: (theme) => ({
    color: theme.colors.primary500,
    width: '1.1rem',
    position: 'absolute',
    top: '50%',
    right: 0,
    transform: 'translate(-50%, -50%)',
  }),
});

const TextDropdownIconInner = ({
  theme, icon, iconProps, ...props
}) => {
  const styles = useStyles(theme);
  return (
    <div {...props} className={styles.container}>
      <FontAwesomeIcon
        {...iconProps}
        icon={faChevronDown}
        style={{ width: '100%' }}
      />
    </div>
  );
};

const ThemedTextDropdownIcon = withTheme(TextDropdownIconInner);

const TextDropdownIcon = ({
  icon, iconProps, ...props
}) => <ThemedTextDropdownIcon {...props} icon={icon} iconProps={iconProps} />;

TextDropdownIcon.propTypes = {
  /**
   * FontAwesome icon object
   */
  icon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  /**
   * Additional props to pass to the font awesome icon component
   */
  iconProps: PropTypes.object,
};

TextDropdownIcon.defaultProps = {
  icon: undefined,
  iconProps: {},
};

export default ThemedTextDropdownIcon;
