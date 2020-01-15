import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import Tooltip, { tooltipPropTypes } from '../Tooltip/Tooltip.component';
import Row from '../Grid/Row/Row.component';
import Column from '../Grid/Column/Column.component';
import useIsDesktop from '../../hooks/useIsDesktop';
import getTheme from '../../utils/getTheme';

const StyledLabelWrap = styled.div`
  display: flex;
  align-items: flex-end;
  padding-bottom: ${({ theme }) => theme.spacing[4]};
  width: 100%;
`;

const StyledLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.label.color};
  width: 100%;
`;

const renderTooltip = (tooltip, hasTooltip, enableTooltip) => {
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

  return (
    <ThemeProvider theme={getTheme()}>
      <Row>
        <StyledLabelWrap className="label">
          <Column cols={hasTooltip ? '10' : '12'}>
            <StyledLabel htmlFor={forId}>
              {text}
            </StyledLabel>
          </Column>
          {renderTooltip(tooltip, hasTooltip, enableTooltip)}
        </StyledLabelWrap>
      </Row>
    </ThemeProvider>
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
