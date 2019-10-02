import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import css from 'styled-jsx/css';

import Tooltip from '../Tooltip/Tooltip.component';
import Row from '../Grid/Row/Row.component';
import Column from '../Grid/Column/Column.component';

const styles = css`
.label {
    @apply flex items-end pb-8 w-full;
  }
`;

const Label = ({
  forId, text, tooltip, tooltipEnabled, forceFullWidth,
}) => {
  const [hasTooltip, setHasTooltip] = useState(true);
  useEffect(() => {
    setHasTooltip(!!((tooltip.body && tooltip.body.length) || (tooltip.title && tooltip.title.length)));
  }, [tooltip.body, tooltip.title]);

  const renderTooltip = () => {
    if (hasTooltip && tooltipEnabled) {
      return (
        <Column col="2">
          <Tooltip title={tooltip.title} body={tooltip.body} boundingElementSelector={tooltip.boundingElementSelector} screenReaderLabel={tooltip.screenReaderLabel} />
        </Column>
      );
    }
    return null;
  };

  return (
    <Row>
      <style jsx>{styles}</style>
      <div className="label">
        <Column col={hasTooltip && !forceFullWidth ? '10' : '12'}>
          <label htmlFor={forId} className="manor-body1 manor-spacing-label-to-field w-full">
            {text}
          </label>
        </Column>
        {renderTooltip()}
      </div>
    </Row>
  );
};

Label.propTypes = {
  forId: PropTypes.string,
  text: PropTypes.string,
  tooltip: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
    boundingElementSelector: PropTypes.string,
    screenReaderLabel: PropTypes.string,
  }),
  tooltipEnabled: PropTypes.bool,
  forceFullWidth: PropTypes.bool,
};

Label.defaultProps = {
  forId: null,
  text: '',
  tooltip: {},
  tooltipEnabled: false,
  forceFullWidth: false,
};

export default Label;
