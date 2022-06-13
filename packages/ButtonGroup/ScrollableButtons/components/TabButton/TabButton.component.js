import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Link } from '@comparethemarketau/manor-link';
import { TabButtonContainer, TextContainer } from './TabButton.styles';

const TabButton = ({
  href, label, onClick, selected, onRef, handleOnClick,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    if (onRef) {
      onRef(ref);
    }
  }, []);

  const handleClick = () => {
    if (onClick && !selected) {
      onClick();
      handleOnClick();
    }
  };

  return (
    <TabButtonContainer ref={ref} selected={selected}>
      <Link trackingLabel={label} href={href} underline="none" handleClick={handleClick}>
        <TextContainer selected={selected}>
          {label}
        </TextContainer>
      </Link>
    </TabButtonContainer>
  );
};

TabButton.propTypes = {
  selected: PropTypes.bool.isRequired,
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  onRef: PropTypes.func,
  handleOnClick: PropTypes.func,
};

TabButton.defaultProps = {
  onClick: () => { },
  onRef: () => { },
  handleOnClick: () => { },
};

export default TabButton;
