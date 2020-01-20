import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import Tooltip, { tooltipPropTypes } from '../Tooltip/Tooltip.component';
import Row from '../Grid/Row/Row.component';
import Column from '../Grid/Column/Column.component';
import useIsDesktop from '../../hooks/useIsDesktop';
import getTheme from '../../utils/getTheme';

const StyledRow = styled(Row)`
  margin-left: 0;
  margin-right: 0;
`;

const StyledColumn = styled(Column)`
  padding-left: 0;
  padding-right: 0;
`;

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

const renderTooltip = (tooltip, hasTooltip, enableTooltip, fullWidth) => {
  const {
    title, body, screenReaderLabel, justifyEnd, iconSmall,
  } = tooltip;
  if (hasTooltip && enableTooltip) {
    return (
      <StyledColumn cols="2">
        <Tooltip
          title={title}
          body={body}
          screenReaderLabel={screenReaderLabel}
          justifyEnd={justifyEnd || fullWidth}
          iconSmall={iconSmall}
        />
      </StyledColumn>
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
      <StyledRow>
        <StyledLabelWrap className="label">
          <StyledColumn cols={hasTooltip ? '10' : '12'}>
            <StyledLabel htmlFor={forId}>
              {text}
            </StyledLabel>
          </StyledColumn>
          {renderTooltip(tooltip, hasTooltip, enableTooltip, fullWidth)}
        </StyledLabelWrap>
      </StyledRow>
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
