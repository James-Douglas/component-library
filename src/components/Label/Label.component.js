import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tooltip, { tooltipPropTypes } from '../Tooltip/Tooltip.component';
import Row from '../Grid/Row/Row.component';
import Column from '../Grid/Column/Column.component';
import useIsDesktop from '../../hooks/useIsDesktop';

const StyledLabelWrap = styled.div`
  display: flex;
  align-items: flex-end;
  padding-bottom: 0.4rem;
  width: 100%;
`;

const StyledLabel = styled.label`
  font-size: 1.6rem;
  width: 100%;
`;

const Label = ({
  forId, text, tooltip, fullWidth,
}) => {
  const [hasTooltip, setHasTooltip] = useState(true);
  const [enableTooltip, setEnableTooltip] = useState(false);
  const desktop = useIsDesktop(false);

  useEffect(() => {
    setHasTooltip(!!((tooltip.body && tooltip.body.length) || (tooltip.title && tooltip.title.length)));
  }, [tooltip.body, tooltip.title]);

  useEffect(() => {
    setEnableTooltip(fullWidth || !desktop);
  }, [fullWidth, desktop]);

  const renderTooltip = () => {
    const {
      title, body, boundingElementSelector, screenReaderLabel, justifyEnd,
    } = tooltip;
    if (hasTooltip && enableTooltip) {
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
  fullWidth: PropTypes.bool,
};

Label.defaultProps = {
  forId: null,
  text: '',
  tooltip: {},
  fullWidth: false,
};

export default Label;
