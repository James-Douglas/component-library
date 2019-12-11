import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tooltip, { tooltipPropTypes } from '../Tooltip/Tooltip.component';
import Row from '../Grid/Row/Row.component';
import Column from '../Grid/Column/Column.component';

const StyledLabelWrap = styled.div`
  display: flex;
  align-items: flex-end;
  padding-bottom: 0.8rem;
  width: 100%;
`;

const StyledLabel = styled.label`
  font-size: 1.6rem;
  width: 100%;
`;

const Label = ({
  forId, text, tooltip, tooltipEnabled,
}) => {
  const [hasTooltip, setHasTooltip] = useState(true);
  useEffect(() => {
    setHasTooltip(!!((tooltip.body && tooltip.body.length) || (tooltip.title && tooltip.title.length)));
  }, [tooltip.body, tooltip.title]);

  const renderTooltip = () => {
    const {
      title, body, boundingElementSelector, screenReaderLabel, justifyEnd,
    } = tooltip;
    if (hasTooltip && tooltipEnabled) {
      return (
        <Column cols="2">
          <Tooltip
            title={title}
            body={body}
            boundingElementSelector={boundingElementSelector}
            screenReaderLabel={screenReaderLabel}
            justifyEnd={justifyEnd}
          />
        </Column>
      );
    }
    return null;
  };
  return (
    <Row>
      <StyledLabelWrap className="label">
        <Column cols={hasTooltip ? '10' : '12'}>
          <StyledLabel htmlFor={forId}>
            {text}
          </StyledLabel>
        </Column>
        {renderTooltip()}
      </StyledLabelWrap>
    </Row>
  );
};

Label.propTypes = {
  forId: PropTypes.string,
  text: PropTypes.string,
  tooltip: PropTypes.shape(tooltipPropTypes),
  tooltipEnabled: PropTypes.bool,
};

Label.defaultProps = {
  forId: null,
  text: '',
  tooltip: {},
  tooltipEnabled: false,
};

export default Label;
